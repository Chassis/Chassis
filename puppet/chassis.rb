require "pathname"
require "yaml"
require "open3"

module Chassis
	@@dir = File.dirname(File.dirname(__FILE__))
	@@extension_dir = File.join(@@dir, 'extensions')
	@@extension_config = {}

	def self.get_extension_config(extension)
		# Use cache if we can.
		return @@extension_config[extension] if @@extension_config.key?(extension)

		path = File.join(@@extension_dir, extension, 'chassis.yaml')

		begin
			YAML.load_file(path)
		rescue Errno::ENOENT
			# No configuration, legacy.
			{ "version" => 1 }
		end
	end

	def self.get_extensions(version = nil)
		all = Dir.glob(@@extension_dir + '/*').map { |directory| File.basename( directory ) }

		return all if ! version

		all.select { |extension|
			config = get_extension_config(extension)
			config['version'] == version
		}
	end

	def self.load_config()
		# Load git-managed configuration
		_config = YAML.load_file(File.join(@@dir, "config.yaml"))
		has_custom_prefix = false

		# Load other configuration files
		config_files = [ "config.local.yaml", "content/config.yaml", "content/config.local.yaml" ]
		config_files.each do |filename|
			path = File.join(@@dir, filename)

			begin
				confvars = YAML.load_file(path)

				if confvars.is_a?(Hash)
					_config.merge!(confvars)

					# Check for prefix.
					has_custom_prefix = true if confvars.has_key? "database" and confvars["database"].has_key? "prefix"
				end
			rescue Errno::ENOENT
				# No overriden YAML found -- that's OK; just use the defaults.
			rescue Psych::SyntaxError => e
				# Syntax error of some sort, probably
				puts "ERROR: Could not load config:\n    #{e.message}"
				exit 1
			end
		end

		unless _config["database"].has_key? "prefix"
			puts "ERROR: database.prefix is required as of 2016-11-25 but was not found."
			raise "Could not load Chassis configuration"
		end

		_config["database"]["has_custom_prefix"] = has_custom_prefix
		return _config
	end

	def self.normalize_config(config)
		config["synced_folders"] = {} unless config["synced_folders"]

		if config["wpdir"]
			puts "WARNING: wpdir is deprecated, use paths.wp instead"
			config["paths"]["wp"] = config["wpdir"]
		end

		# Set up the paths as needed
		config["mapped_paths"] = {}
		base = config["paths"]["base"] = File.expand_path(config["paths"]["base"], @@dir)
		base_path = Pathname.new base

		if not base.start_with? @@dir
			# Base isn't under the Chassis directory, so mount it separately
			config["synced_folders"][base] = "/chassis"
			config["mapped_paths"]["base"] = "/chassis"
		else
			rel_path = base_path.relative_path_from( Pathname.new @@dir )
			if rel_path.to_s != "."
				config["mapped_paths"]["base"] = "/vagrant/" + rel_path.to_s
			else
				config["mapped_paths"]["base"] = "/vagrant"
			end
		end

		# Grab each of our expected paths
		["wp", "content"].each do |path|
			begin
				config["paths"][path] = File.expand_path(config["paths"][path], base)
			rescue StandardError => e
				config["paths"][path] = File.expand_path(path, base)
				puts "WARNING: Missing paths.#{path} - Defaulting to #{config["paths"][path]}"
			end

			fullpath = config["paths"][path]

			if not fullpath.start_with? base
				# Directory isn't under our base, so needs to manually be mapped
				config["synced_folders"][fullpath] = "/chassis/#{path}"
				config["mapped_paths"][path] = "/chassis/#{path}"
			else
				rel_path = Pathname.new(fullpath).relative_path_from( base_path )
				if rel_path.to_s != "."
					config["mapped_paths"][path] = config["mapped_paths"]["base"] + "/" + rel_path.to_s
				else
					config["mapped_paths"][path] = config["mapped_paths"]["base"]
				end
			end
		end

		# Cast config as needed
		config["nfs"] = !!config["nfs"]
		config["php"] = config["php"].to_s

		return config
	end

	def self.config
		self.normalize_config(self.load_config())
	end

	def self.install_extensions(config)
		# Install extensions listed in config
		if config["extensions"]
			config["extensions"].each { |ext| self.install_extension(ext) }
		end

		# For each of the extensions in our folder, read the extension config and
		# install dependencies, etc for that extension.
		self.get_extensions(2).each do |extension|
			ext_config = self.get_extension_config(extension)

			# If we have dependencies, then install them.
			if ext_config["dependencies"]
				ext_config["dependencies"].each { |ext| self.install_extension(ext) }
			end
		end
	end

	def self.install_extension(extension)
		# Perform checks for various forms of extension definition.
		if extension =~ /^[\w-]+$/ # Chassis official extension, like 'nodejs'.
			repo = 'https://github.com/chassis/' + extension
		elsif extension =~ /^[\w-]+\/[\w-]+$/ # account/repo style.
			repo = 'https://github.com/' + extension
		else
			repo = extension
		end

		folder = @@dir + '/extensions/' + extension.split('/').last.gsub(/.git$/, '')

		system("git clone %s %s --recursive" % [repo, folder] ) unless File.exist?( folder )
	end

	def self.update_core
		puts "\e[32mChecking for Chassis core updates...\e[0m"
		core = ['core']
		updates = self.updates_check(core, @@dir)
		self.do_updates(updates, @@dir)
    end

	def self.update_extensions
		puts "\e[32mChecking for Chassis extension updates...\e[0m"
		extensions = Dir.glob(@@extension_dir + '/*').map { |directory| File.basename( directory ) }
		updates = self.updates_check(extensions, @@extension_dir)
		self.do_updates(updates, @@extension_dir)
	end

	def self.updates_check(folders, directory)
		updates = Array.new
		folders.each do |folder|
			next if folder == 'example'
			if 'core' == folder
				Dir.chdir(directory)
			elsif
				Dir.chdir(directory + '/' + folder )
			end
			git_checkout_master_stdout, git_checkout_master_stdeerr, git_checkout_master_status = Open3.capture3("git checkout master")
			git_remote_update_stdout, git_remote_update_stdeerr, git_remote_update_status = Open3.capture3("git remote update")
			git_status_stdout, git_status_stdeerr, git_status_status = Open3.capture3("git status --porcelain=2 --branch")
			if git_status_stdout =~ /^# branch.ab \+\d+ -([1-9]\d*)$/
				updates.push folder
			end
		end
		return updates
	end

	def self.do_updates(updates, directory)
		if updates.empty? != true
			if ( updates.count > 1 )
				wording = String.new("extensions appear")
			elsif
				wording = String.new("extension appears")
			end
			print "\e[0;1mThe following Chassis #{wording} to be out of date: " + updates.join(", ") + ". This may cause provisioning to fail! Would you like to update them now? [Y/n]: \e[0m"
			autoupdate = STDIN.gets.chomp
			if ( autoupdate != "n" )
				updates.each do |update|
					puts "\e[32mUpdating the #{update} extension...\e[0m"
					Dir.chdir(directory + '/' + update )
					git_pull_stdout, git_pull_stdeerr, git_pull_status = Open3.capture3("git checkout master && git pull")
					puts "\e[32;1mThe #{update} extension is now up to date.\e[0m"
				end
			end
		elsif
			puts "\e[032;1mAll your extensions are up to date!\e[0m\n"
		end
	end
end
