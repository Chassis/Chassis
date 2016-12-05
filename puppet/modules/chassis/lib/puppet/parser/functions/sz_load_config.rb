require "/vagrant/puppet/chassis"

module Puppet::Parser::Functions
	newfunction(:sz_load_config, :type => :rvalue) do |args|
		return Chassis.config
	end
end