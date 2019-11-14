require "pathname"
require "yaml"
require "open3"

module Chassis
	@@dir = File.dirname(File.dirname(__FILE__))
	@@extension_dir = File.join(@@dir, 'extensions')
	@@global_ext_dir = File.join(Dir.home, ".chassis", "extensions")
	@@extension_config = {}
	@@global_extension_config = {}

	def self.get_extension_config(extension, base_dir = @@extension_dir)
		# Use cache if we can.
		return @@extension_config[extension] if @@extension_config.key?(extension)

		path = File.join(base_dir, extension, 'chassis.yaml')

		begin
			YAML.load_file(path)
		rescue Errno::ENOENT
			# No configuration, legacy.
			{ "version" => 1 }
		end
	end

	def self.get_global_extension_config(extension, global_ext_dir = @@global_ext_dir)
		# Use cache if we can.
		return @@global_extension_config[extension] if @@global_extension_config.key?(extension)

		path = File.join(extension, 'chassis.yaml')
		begin
			YAML.load_file(path)
		rescue Errno::ENOENT
			# No configuration, legacy.
			{ "version" => 1 }
		end
	end

	def self.get_extensions_for_dir(ext_dir, version = nil)
		all = Dir.glob(ext_dir + '/*').map { |directory| File.basename( directory ) }

		# Remove dummy _global if found
		all.delete("_global")

		return all if ! version

		all.select { |extension|
			config = get_extension_config(extension, ext_dir)
			config['version'] == version
		}
	end

	def self.get_global_extensions_for_dir(version = nil)
		all = Dir.glob(@@global_ext_dir + '/*')
		return all if ! version

		all.select { |extension|
			config = get_global_extension_config(extension, @@global_ext_dir)
			config['version'] == version
		}
	end

	def self.get_extensions(version = nil)
		self.get_extensions_for_dir(@@extension_dir, version)
	end

	def self.get_global_extensions(version = nil)
		self.get_global_extensions_for_dir(version)
	end

	def self.load_config()
		# Get the extension configurations.
		ext_config = self.load_extension_config()
		global_ext_config = self.load_global_extension_config()
		# Merge the hashes together.
		extension_vars = ext_config.merge(global_ext_config)

		# Load git-managed configuration
		git_config = YAML.load_file(File.join(@@dir, "config.yaml"))

		# Merge the extension config with the git config.
		if git_config.is_a?(Hash)
			merged_config = extension_vars.merge!(git_config)
		end

		has_custom_prefix = false

		# Load other configuration files
		config_files = [ "config.local.yaml", "content/config.yaml", "content/config.local.yaml" ]
		config_files.each do |filename|
			path = File.join(@@dir, filename)

			begin
				confvars = YAML.load_file(path)

				# Merge the overrides from the other configuration files.
				if confvars.is_a?(Hash)
					merged_config.merge!(confvars)

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

		unless merged_config["database"].has_key? "prefix"
			puts "ERROR: database.prefix is required as of 2016-11-25 but was not found."
			raise "Could not load Chassis configuration"
		end

		merged_config["database"]["has_custom_prefix"] = has_custom_prefix
		return merged_config
	end

	def self.load_extension_config()
		ext_config = {}
		# For each of the extensions in our folder, read the extension config for that extension.
		self.get_extensions(2).each do |extension|
			ext_config.merge!(self.get_extension_config(extension))
			# Remove the extension version so we don't override the version number for Chassis core.
			ext_config.delete('version')
		end
		return ext_config
	end

	def self.load_global_extension_config()
		global_ext_config = {}
		# For each of the extensions in our folder, read the extension config for that extension.
		self.get_global_extensions(2).each do |extension|
			global_ext_config.merge!(self.get_global_extension_config(extension))
			# Remove the extension version so we don't override the version number for Chassis core.
			global_ext_config.delete('version')
		end
		return global_ext_config
	end

	def self.normalize_config(config)
		config["synced_folders"] = {} unless config["synced_folders"]

		if config["wpdir"]
			puts "WARNING: wpdir is deprecated, use paths.wp instead"
			config["paths"]["wp"] = config["wpdir"]
		end

		if ! config["hosts"][0].include?(".local")
			puts "\e[33mWARNING: The hosts URL does not contain .local. You will need to edit your hosts file for this URL to resolve.\e[0m"
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
		config["machine_name"] = config["machine_name"].to_s
		config["upload_size"] = config["upload_size"].to_s

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
	end

	def self.install_dependencies(extension)
		# Install dependencies from extension config
		ext_name = extension.split('/').last.gsub(/\.git$/, '').downcase
		ext_config = self.get_extension_config(ext_name)

		# If we have dependencies, then install them.
		if ext_config["dependencies"]
			ext_config["dependencies"].each { |dep|
				dep_name = dep.split('/').last.gsub(/\.git$/, '').downcase
				next if File.exist?( @@dir + '/extensions/' + dep_name )
				self.install_extension(dep)
			}
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

		renamed_extensions = Array.new
		# We need to add a version to allow for a seamless upgrade to Bionic Beaver.
		if config["version"] >= 3
			# Check for existing extensions that have a hyphen and remove them.
			old_extensions = Dir.glob(@@dir + '/extensions/*')
			old_extensions.each { |extension|
				# Remove @@dir before "-" include check in case of hyphenated parent directories.
				next unless extension.gsub(@@dir, '').include? "-"
				# Delete the old extension if it has a hyphen in it.
				FileUtils.remove_dir(extension)
				# Swap "-" for "_" in the non-parent-directory part of the path.
				new_extension = @@dir + extension.gsub(@@dir, '').gsub(/-/, '_')
				renamed_extensions << "- #{extension} to #{new_extension}"
			}
			# Puppet have taken a hard stance on not allowing hyphens in class names.
			folder = @@dir + '/extensions/' + extension.split('/').last.gsub(/\.git$/, '').gsub(/-/, '_').downcase
		else
			# Leave extensions as they were for Xenial and below for backwards compatibility.
			folder = @@dir + '/extensions/' + extension.split('/').last.gsub(/\.git$/, '').downcase
		end

		if ! renamed_extensions.empty?
			puts("\e[33mWe're renaming the following extensions:")
			renamed_extensions.each {|extension|
				puts extension
			}
			puts("\e[0m")
		end

		system("git clone %s %s --recursive" % [repo, Shellwords.escape(folder)] ) unless File.exist?( folder )

		# Install dependencies for this extension.
		self.install_dependencies(extension)
	end

	def self.make_relative(base, paths)
		# Convert to relative from Vagrantfile
		base = Pathname.new(base)
		paths.map do |path|
			pathname = Pathname.new(path)
			pathname.relative_path_from(base).to_s
		end
	end
end
