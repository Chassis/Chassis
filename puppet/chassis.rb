require "pathname"
require "yaml"

module Chassis
	@@dir = File.dirname(File.dirname(__FILE__))

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

		return config
	end

	def self.config
		self.normalize_config(self.load_config())
	end

	def self.install_extensions(config)
		# Install extensions listed in config
		if config["extensions"]
			self.install_extensions_from_array(config["extensions"])
		end

		# For each of the extensions in our folder, read the extension config and
		# install dependencies, etc for that extension.
		Dir.foreach('extensions/') do |ext_folder|

			# Bail out if we aren't a valid folder.
			next if ext_folder == '.' or ext_folder == '..' or File.file?('extensions/' + ext_folder)

			# If we don't have our config file, don't do anything.
			next if not File.exists? 'extensions/' + ext_folder + '/chassis.yaml'

			# Grab our config file and load it.
			ext_config = YAML.load_file('extensions/' + ext_folder + '/chassis.yaml')

			# If we have dependencies, then install them.
			if ext_config["dependencies"]
				install_extensions_from_array(ext_config["dependencies"])
			end
		end
	end

	def self.install_extensions_from_array(extensions)
		extensions.each do |ext|
			if ext.is_a? String
				# If it is a string, then it's a normal extension, install it.
				self.install_extension(ext)
			else
				# Otherwise, we have a dependencies for our extension,
				# which we want to extract out and install as well.
				ext.keys.each do |ext_need_dep|
					# Loop through each of the dependencies we need
					# for the extension and install them.
					ext.values[0].each do |ext_dep|
						self.install_extension(ext_dep)
					end

					# Finally, actually install our extension
					# that needs dependencies.
					self.install_extension(ext_need_dep)
				end
			end
		end
	end

	def self.install_extension(extension)
		# Perform checks for various forms of extension definition.
		if extension.include? "git@" # Full git-based url.
			repo = extension
		elsif extension.include? 'https:' # GitHub-like https url.
			repo = extension
		elsif extension.include? '/' # assume account/repo style.
			repo = 'https://github.com/' + extension
		else # Assume a Chassis official extension, like 'nodejs'.
			repo = 'https://github.com/chassis/' + extension
		end

		folder = @@dir + '/extensions/' + extension.split('/').last.gsub(/.git$/, '')

		if ! File.exist?( folder )
			system("git clone %s %s --recursive" % [repo, folder] )
		end
	end
end
