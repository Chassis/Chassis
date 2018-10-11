require "/vagrant/puppet/chassis"

# Configuration for when inside the virtual environment.
Chassis.class_variable_set(:@@config_dir, '/chassis')

module Puppet::Parser::Functions
	newfunction(:sz_load_config, :type => :rvalue) do |args|
		return Chassis.config
	end
end
