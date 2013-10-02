# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

	# Store the current version of Vagrant for use in conditionals when dealing
  # with possible backward compatible issues.
  vagrant_version = Vagrant::VERSION.sub(/^v/, '')

	# We <3 Ubuntu LTS
	config.vm.box = "precise32"

	# Get it. Got it? Good.
	config.vm.box_url = "http://files.vagrantup.com/precise32.box"

	# Having access would be nice.
	config.vm.network :private_network, ip: "192.168.33.10"
	config.vm.hostname = "vagrant.local"
	# You can configure an alias to handle other domains for testing.
	config.hostsupdater.aliases = ["example.wpdemo.com.au"]

	# Before any other provisioning, ensure that we're up-to-date
	config.vm.provision :shell, :inline => "apt-get update"

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
