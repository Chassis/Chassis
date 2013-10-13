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
		_config.merge!(
			YAML.load(
				File.open(
					File.join(File.dirname(__FILE__), filename),
					File::RDONLY
				).read
			)
		)
	rescue Errno::ENOENT
		# No overriden YAML found -- that's OK; just use the defaults.
	end
end

CONF = _config

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
	config.vm.provision :shell, :inline => "apt-get update"

	# Add more RAM
	 config.vm.provider :virtualbox do |virtualbox|
    virtualbox.customize ["modifyvm", :id, "--memory", "1024"]
  end

	# Provision our setup with Puppet
	config.vm.provision :puppet do |puppet|
		puppet.manifests_path = "puppet/manifests"
		puppet.module_path    = "puppet/modules"
		puppet.manifest_file  = "development.pp"
		puppet.facter = {
			"extra_hosts" => config.hostsupdater.aliases
		}
		# puppet.options = "--verbose --debug"
	end

	# Ensure that WordPress can install/update plugins, themes and core
	if vagrant_version >= "1.3.0"
		config.vm.synced_folder ".", "/vagrant", :mount_options => [ "dmode=777,fmode=777" ]
	else
		config.vm.synced_folder ".", "/vagrant", :extra => "dmode=777,fmode=777"
	end

	# Success?
end
