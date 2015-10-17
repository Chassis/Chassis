require "yaml"

module Puppet::Parser::Functions
	newfunction(:sz_load_config, :type => :rvalue) do |args|
		directory = args[0]

		# Load git-managed configuration
		config = YAML.load(
			File.open(
				File.join(directory, "config.yaml"),
				File::RDONLY
			).read
		)

		# Load other configuration files
		config_files = [ "config.local.yaml", "content/config.yaml", "content/config.local.yaml" ]
		config_files.each do |filename|
			begin
				confvars = YAML.load(
					File.open(
						File.join(directory, filename),
						File::RDONLY
					).read
				)

				config.merge!(confvars) if confvars.is_a?(Hash)
			rescue Errno::ENOENT
				# No overriden YAML found -- that's OK; just use the defaults.
			end
		end

		return config
	end
end