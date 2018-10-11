# -*- mode: ruby -*-
# vi: set ft=ruby :

# Warn the user if we're on an old version of Vagrant
if Gem::Version.new(Vagrant::VERSION) < Gem::Version.new("1.5.0")
	puts "ERROR: Outdated version of Vagrant"
	puts "  Chassis requires Vagrant 1.5.0+ "
	puts
	exit 1
end

# Path to the root of the Chassis directory.
chassis_dir = File.dirname(File.expand_path(__FILE__))

# Load Chassis config from the Chassis root by default.
chassis_config_dir = chassis_dir

# Load Chassis config overrides from a custom directory, if configured.
unless ENV['CHASSIS_CWD'].nil?
	chassis_config_dir = ENV['CHASSIS_CWD']
end

# Check that submodules have been loaded
if not File.exist?(File.join(chassis_dir, "puppet", "modules", "apt", ".git"))
	puts "NOTICE: Submodules not found, updating for you"

	if not system("git submodule update --init", :chdir => chassis_dir)
		puts "WARNING: Submodules may be missing, and could not automatically\ndownload them for you."
	end

	# Extra new line, please!
	puts
end

# Ensure we have a content directory to sync.
chassis_content_dir = File.join(chassis_dir, "content")
Dir.mkdir(chassis_content_dir) unless File.exists?(chassis_content_dir)

require_relative "puppet/chassis.rb"

# Set the Chassis config override directory.
Chassis.class_variable_set(:@@config_dir, chassis_config_dir)

CONF = Chassis.config

# Install extensions defined in config file
Chassis.install_extensions(CONF)

# Add extra extension modules
module_paths = [chassis_dir + "/puppet/modules"]
module_paths.concat Dir.glob(chassis_dir + "/extensions/*/modules")

# Convert to relative from Vagrantfile
module_paths = Chassis.make_relative(chassis_dir, module_paths)

# Add global extensions, if they exist
global_ext_path = File.join(Dir.home, ".chassis", "extensions")
use_global_ext = Dir.exist?(global_ext_path) && ! Dir.empty?(global_ext_path)
if use_global_ext
	global_ext_modules = Dir.glob(global_ext_path + "/*/modules")
	global_ext_modules.delete_if { |path|
		ext_name = path.split("/")[-2]
		# Search for the ext_name in the regular extensions
		module_paths.include?("extensions/" + ext_name + "/modules")
	}
	global_ext_modules = Chassis.make_relative(global_ext_path, global_ext_modules)
end

Vagrant.configure("2") do |config|
	# Set up potential providers.
	config.vm.provider "virtualbox" do |vb|
		# Use linked clones to preserve disk space.
		vb.linked_clone = true if Vagrant::VERSION =~ /^1.8/
		vb.customize [ "guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 1000 ]

		# Customisations from config.local.yaml
		if CONF['virtualbox']
			vb.memory = CONF['virtualbox']['memory'] if CONF['virtualbox']['memory']
			vb.cpus = CONF['virtualbox']['cpus'] if CONF['virtualbox']['cpus']
		end
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
	config.vm.provision :shell, :path => File.expand_path("puppet/preprovision.sh", chassis_dir), :args => preprovision_args

	# Provision our setup with Puppet
	config.vm.provision :puppet do |puppet|
		puppet.manifests_path = File.expand_path("puppet/manifests", chassis_dir)
		puppet.manifest_file  = "development.pp"

		# Broken due to https://github.com/mitchellh/vagrant/issues/2902
		## puppet.module_path    = module_paths
		# Workaround:
		machine_rel_module_paths = module_paths.map { |rel_path| "/vagrant/" + rel_path }
		if use_global_ext
			prefixed_global = global_ext_modules.map { |rel_path| "/vagrant/extensions/_global/" + rel_path }
			machine_rel_module_paths.concat prefixed_global
		end
		puppet.options = "--modulepath " +  machine_rel_module_paths.join( ':' ).inspect

		# Disable Hiera configuration file
		puppet.options += " --hiera_config /dev/null"

		# Disable Puppet warnings
		puppet.options += " --disable_warnings=deprecations"

		#puppet.options = puppet.options + " --verbose --debug"
	end

	# Help the user out the first time they provision
	config.vm.provision :shell do |shell|
		shell.path = File.expand_path("puppet/postprovision.sh", chassis_dir)
		shell.args = [
			# 0 = hostname
			CONF['hosts'][0],

			# 1 = username
			CONF['admin']['user'],

			# 2 = password
			CONF['admin']['password']
		]
	end

	# Set up synced folders.
	synced_folders = CONF["synced_folders"].clone

	# Always sync Chassis root to /vagrant.
	synced_folders[chassis_dir] = "/vagrant"

	# Sync the project directory with config overrides to /chassis. Add the
	# trailing slash in case the chassis_dir is the same as chassis_config_dir.
	synced_folders[chassis_config_dir + '/'] = "/chassis"

	if use_global_ext
		synced_folders[global_ext_path] = "/vagrant/extensions/_global"
	end

	# Ensure that WordPress can install/update plugins, themes and core
	mount_opts = CONF['nfs'] ? [] : ["dmode=777","fmode=777"]

	synced_folders.each do |from, to|
		config.vm.synced_folder from, to, :mount_options => mount_opts, :nfs => CONF['nfs']

		# Automatically use bindfs if we can.
		if CONF['nfs'] && Vagrant.has_plugin?("vagrant-bindfs")
			config.bindfs.bind_folder to, to
		end
	end

	# Success?
end
