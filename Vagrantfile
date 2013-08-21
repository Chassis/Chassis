# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
	# We <3 Ubuntu LTS
	config.vm.box = "precise32"

	# Get it. Got it? Good.
	config.vm.box_url = "http://files.vagrantup.com/precise32.box"

	# Having access would be nice.
	config.vm.network :private_network, ip: "192.168.33.10"
	config.vm.hostname = "vagrant.local"

	# Before any other provisioning, ensure that we're up-to-date
	config.vm.provision :shell, :inline => "apt-get update"

	# Provision our setup with Puppet
	config.vm.provision :puppet do |puppet|
		puppet.manifests_path = "puppet/manifests"
		puppet.module_path    = "puppet/modules"
		puppet.manifest_file  = "development.pp"
		# puppet.options = "--verbose --debug"
	end

	# Success?
end
