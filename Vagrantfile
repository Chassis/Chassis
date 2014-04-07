# -*- mode: ruby -*-
# vi: set ft=ruby :

require "yaml"

# Load git-managed configuration
_config = YAML.load(
	File.open(
		File.join(File.dirname(__FILE__), "config.yaml"),
		File::RDONLY
	).read
)

# Load other configuration files
config_files = [ "config.local.yaml", "content/config.yaml", "content/config.local.yaml" ]
config_files.each do |filename|
	begin
		confvars = YAML.load(
			File.open(
				File.join(File.dirname(__FILE__), filename),
				File::RDONLY
			).read
		)

		_config.merge!(confvars) if confvars.is_a?(Hash)
	rescue Errno::ENOENT
		# No overriden YAML found -- that's OK; just use the defaults.
	end
end

CONF = _config

# Add extra extension modules
base_path = Pathname.new( File.dirname( __FILE__ ) )
module_paths = [ base_path.to_s + "/puppet/modules" ]
module_paths.concat Dir.glob( base_path.to_s + "/extensions/*/modules" )

# Convert to relative from Vagrantfile
module_paths.map! do |path|
	pathname = Pathname.new(path)
	pathname.relative_path_from(base_path).to_s
end

Vagrant.configure("2") do |config|
	# Store the current version of Vagrant for use in conditionals when dealing
	# with possible backward compatible issues.
	vagrant_version = Vagrant::VERSION.sub(/^v/, '')

	# We <3 Ubuntu LTS
	config.vm.box = "precise32"

	# Get it. Got it? Good.
	config.vm.box_url = "http://files.vagrantup.com/precise32.box"

	# Having access would be nice.
	config.vm.network :private_network, ip: CONF['ip']
	config.vm.hostname = CONF['hosts'][0]

	# You can configure an alias to handle other domains for testing.
	config.hostsupdater.aliases = CONF['hosts'][1..-1]

	# Before any other provisioning, ensure that we're up-to-date
	config.vm.provision :shell, :path => "puppet/preprovision.sh"

	# Provision our setup with Puppet
	config.vm.provision :puppet do |puppet|
		puppet.manifests_path = "puppet/manifests"
		puppet.manifest_file  = "development.pp"

		# Broken due to https://github.com/mitchellh/vagrant/issues/2902
		## puppet.module_path    = module_paths
		# Workaround:
		module_paths.map! { |rel_path| "/vagrant/" + rel_path }
		puppet.options = "--modulepath " +  module_paths.join( ':' ).inspect

		#puppet.options = "--verbose --debug"
	end

	# Ensure that WordPress can install/update plugins, themes and core
	if vagrant_version >= "1.3.0"
		config.vm.synced_folder ".", "/vagrant", :mount_options => [ "dmode=777,fmode=777" ]
	else
		config.vm.synced_folder ".", "/vagrant", :extra => "dmode=777,fmode=777"
	end

	# Success?
end
