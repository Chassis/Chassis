# -*- mode: ruby -*-
# vi: set ft=ruby :

# Warn the user if we're on an old version of Vagrant
if Gem::Version.new(Vagrant::VERSION) < Gem::Version.new("1.5.0")
	puts "ERROR: Outdated version of Vagrant"
	puts "  Chassis requires Vagrant 1.5.0+ "
	puts
	exit 1
end

# See https://github.com/hashicorp/vagrant/issues/8878 and https://github.com/Chassis/Chassis/issues/771
class VagrantPlugins::ProviderVirtualBox::Action::Network
	def dhcp_server_matches_config?(dhcp_server, config)
		true
	end
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
module_paths = Chassis.make_relative(base_path, module_paths)

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
	# Set the machine name not default.
	if CONF['machine_name'] != 'default'
		config.vm.define CONF['machine_name']
	end

	 config.trigger.before [ :provision, :up, :halt ] do |trigger|
		deprecated_extensions = ''
		if CONF["version"] >= 3 && ! CONF["extensions"].nil?
			# Warn about old extensions.
			CONF["extensions"].each do |extension|
				if extension.include? "-"
					new_extension = extension.gsub(/-/, '_')
					deprecated_extensions << "Please change #{extension} to #{new_extension} in your yaml configuration file.\n"
				end
			end
		end
		trigger.warn = "#{deprecated_extensions}"
	 end

	# Set up synced folders.
	synced_folders = CONF["synced_folders"].clone
	synced_folders["."] = "/vagrant"

	if use_global_ext
		synced_folders[global_ext_path] = "/vagrant/extensions/_global"
	end

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

		# Set the machine name for the VirtualBox GUI.
		if CONF['machine_name'] != 'default'
			vb.name = CONF['machine_name']
		end

		# Pass synced folders to guest
		full_synced = {}
		synced_folders.each do |from, to|
			full_from = File.realpath from, base_path.to_s
			full_synced[ to ] = full_from
		end
		vb.customize [ "guestproperty", "set", :id, "/Chassis/synced_folders", JSON.dump( full_synced ), "--flags", "TRANSIENT,RDONLYGUEST" ]
	end

	if CONF['_mode'] == "normal"
		# Use the Chassis box we've built with the default config.
		config.vm.box = "chassis/chassis"
		config.vm.box_version = ">= 4.0, < 5.0"
	else
		# We <3 Ubuntu LTS
		config.vm.box = "bento/ubuntu-20.04"
	end

	# Enable SSH forwarding
	config.ssh.forward_agent = true

	# Disable updating of Virtual Box Guest Additions for faster provisioning.
	if Vagrant.has_plugin?("vagrant-vbguest")
		config.vbguest.auto_update = false
	end

	# Add port forwarding for Vagrant Share
	config.vm.network "forwarded_port", guest: 80, host: 8000, auto_correct: true

	# Having access would be nice.
	if CONF['ip'] == "dhcp" and CONF['hostsupdater'].nil?
		config.vm.network :private_network, type: "dhcp", hostsupdater: "skip"
	elsif CONF['ip'] == "dhcp" and CONF['hostsupdater'] == true and Vagrant.has_plugin?("vagrant-hostsupdater")
		config.vm.network :private_network, ip: "192.168.33.10"
		if CONF['hosts'].count > 1
			config.hostsupdater.aliases = CONF['hosts']
		end
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
	config.vm.provision :shell do |shell|
		shell.inline = "puppet apply $@"
		shell.keep_color = true

		shell.args = []

		# Set up the module paths
		module_paths.map! { |rel_path| "/vagrant/" + rel_path }

		# Set up the global extension paths
		if ( global_ext_modules )
			global_ext_modules.map! { |rel_path| "/vagrant/extensions/_global/" + rel_path }
			extensions = module_paths + global_ext_modules
		else
			extensions = module_paths
		end
		shell.args.push("--basemodulepath /vagrant/puppet/modules:" +  extensions.join( ':' ).inspect)

		# Set up the full environment
		shell.args.push("--confdir /vagrant/puppet")

		# Set the actual manifest to provision with
		shell.args.push("/vagrant/puppet/manifests")

		# Uncomment this line to turn debugging on:
		# shell.args.push("--verbose --debug")

		# Ensure Puppet doesn't escape our arguments
		shell.args = shell.args.join(" ")
	end

	# Help the user out the first time they provision
	config.vm.provision :shell do |shell|
		if CONF['_mode'] == "base"
			shell.path = "puppet/preparebox.sh"
		else
			shell.path = "puppet/postprovision.sh"
		end
		shell.args = [
			# 0 = hostname
			CONF['hosts'][0],

			# 1 = username
			CONF['admin']['user'],

			# 2 = password
			CONF['admin']['password']
		]
	end

	# Export necessary constants to the VM
	config.vm.provision "set_constants",
		type: :shell,
		path: "puppet/export-constants.sh",
		run: "always"

	# Ensure that WordPress can install/update plugins, themes and core
	mount_opts = CONF['nfs'] ? [] : ["dmode=777","fmode=777"]

	synced_folders.each do |from, to|
		config.vm.synced_folder from, to, :mount_options => mount_opts, :nfs => CONF['nfs'], :group => 'www-data', :owner => 'vagrant'

		# Automatically use bindfs if we can.
		if CONF['nfs'] && Vagrant.has_plugin?("vagrant-bindfs")
			config.bindfs.bind_folder to, to
		end
	end

	# Success?
end
