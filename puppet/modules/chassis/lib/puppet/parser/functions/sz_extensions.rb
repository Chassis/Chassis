require "/vagrant/puppet/chassis"

module Puppet::Parser::Functions
	newfunction(:sz_extensions, :type => :rvalue) do |args|
		directory = args[0]
		version = args.length > 1 ? args[1].to_i : nil

		Chassis.get_extensions_for_dir(directory, version)
	end

	newfunction(:chassis_get_global_extensions, :type => :rvalue) do |args|
		version = args[0]
		Chassis.get_global_extensions(version)
	end
end
