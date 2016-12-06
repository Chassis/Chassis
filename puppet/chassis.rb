require "pathname"
require "yaml"

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
			rescue Psych::Error => e
				# Syntax error of some sort, probably
				puts "ERROR: Could not load config:\n    #{e.message}"
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
			config["extensions"].each do |ext|
				begin
					repo = /^(git@|https:)/.match(ext) ? ext : 'https://github.com/' + ext
					folder = @@dir + '/extensions/' + ext.split('/').last.gsub(/.git$/, '')

					if ! File.exist?( folder )
						system("git clone %s %s --recursive" % [repo, folder] )
					end
				end
			end
		end
	end
end
