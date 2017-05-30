# -*- mode: ruby -*-
# vi: set ft=ruby :

# Warn the user if we're on an old version of Vagrant
if Gem::Version.new(Vagrant::VERSION) < Gem::Version.new("1.5.0")
	puts "WARNING: Outdated version of Vagrant"
	puts "   Chassis requires Vagrant 1.5.0+  "
	puts
end

# Check that submodules have been loaded
if not File.exist?(File.join(File.dirname(__FILE__), "puppet", "modules", "apt", ".git"))
	puts "NOTICE: Submodules not found, updating for you"

	if not system("git submodule update --init", :chdir => File.dirname(__FILE__))
		puts "WARNING: Submodules may be missing, and could not automatically\ndownload them for you."
	end

	# Extra new line, please!
	puts
end

require_relative "puppet/chassis.rb"
CONF = Chassis.config

# Install extensions defined in config file
Chassis.install_extensions(CONF)

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

	# Set up potential providers.
	config.vm.provider "virtualbox" do |vb|
		# Use linked clones to preserve disk space.
		vb.linked_clone = true if Vagrant::VERSION =~ /^1.8/
	end

	# We <3 Ubuntu LTS
	config.vm.box = "bento/ubuntu-16.04"

	# Enable SSH forwarding
	config.ssh.forward_agent = true

	# Disable updating of Virtual Box Guest Additions for faster provisioning.
	if Vagrant.has_plugin?("vagrant-vbguest")
		config.vbguest.auto_update = false
	end

	# Having access would be nice.
	if CONF['ip'] == "dhcp"
		config.vm.network :private_network, type: "dhcp", hostsupdater: "skip"
	else
		config.vm.network :private_network, ip: CONF['ip'], hostsupdater: "skip"
	end
	config.vm.hostname = CONF['hosts'][0]

	# Before any other provisioning, ensure that we're up-to-date
	preprovision_args = [
		CONF['apt_mirror'].to_s,
		CONF['database']['has_custom_prefix'] ? "" : "check_prefix"
	]
	config.vm.provision :shell, :path => "puppet/preprovision.sh", :args => preprovision_args

	# Provision our setup with Puppet
	config.vm.provision :puppet do |puppet|
		puppet.manifests_path = "puppet/manifests"
		puppet.manifest_file  = "development.pp"

		# Broken due to https://github.com/mitchellh/vagrant/issues/2902
		## puppet.module_path    = module_paths
		# Workaround:
		module_paths.map! { |rel_path| "/vagrant/" + rel_path }
		puppet.options = "--modulepath " +  module_paths.join( ':' ).inspect

		# Disable Hiera configuration file
		puppet.options += " --hiera_config /dev/null"

		# Disable Puppet warnings
		puppet.options += " --disable_warnings=deprecations"

		#puppet.options = puppet.options + " --verbose --debug"
	end

	# Help the user out the first time they provision
	config.vm.provision :shell do |shell|
		shell.path = "puppet/postprovision.sh"
		shell.args = [
			# 0 = hostname
			CONF['hosts'][0],

			# 1 = username
			CONF['admin']['user'],

			# 2 = password
			CONF['admin']['password']
		]
	end

	# Ensure that WordPress can install/update plugins, themes and core
	if vagrant_version >= "1.3.0"
		config.vm.synced_folder ".", "/vagrant", :mount_options => [ "dmode=777,fmode=777" ]
		CONF["synced_folders"].each do |from, to|
			config.vm.synced_folder from, to, :mount_options => [ "dmode=777,fmode=777" ]
		end if CONF["synced_folders"]
	else
		config.vm.synced_folder ".", "/vagrant", :extra => "dmode=777,fmode=777"
		CONF["synced_folders"].each do |from, to|
			config.vm.synced_folder from, to, :extra => "dmode=777,fmode=777"
		end if CONF["synced_folders"]
	end

	# Success?
end
