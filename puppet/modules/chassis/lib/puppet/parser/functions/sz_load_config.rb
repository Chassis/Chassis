require "/chassis/puppet/chassis"

Chassis.class_variable_set(:@@config_dir, '/vagrant')

module Puppet::Parser::Functions
	newfunction(:sz_load_config, :type => :rvalue) do |args|
		return Chassis.config
	end
end