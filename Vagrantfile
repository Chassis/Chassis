# -*- mode: ruby -*-
# vi: set ft=ruby :

# See https://github.com/hashicorp/vagrant/issues/8878 and https://github.com/Chassis/Chassis/issues/771
# This is also needed to assist in provisioning Chassis on Windows 10.
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

	# Convert old VM customisations for backwards compatibility.
	if CONF["virtualbox"]
		CONF["virtualmachine"] = CONF["virtualbox"]
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
			trigger.warn = "#{deprecated_extensions}"
		end
		# Warn about deprecated 'virtualbox' setting if it's present.
		if CONF["virtualbox"]
			trigger.warn = "The 'virtualbox' settings in your yaml configuration file has been deprecated. Please change it to 'virtualmachine' instead.\n"
		end
	end

	# Show a warning that non-*.local domains will not automatically resolve.
	config.trigger.after [ :provision, :up ] do |trigger|
		if ! CONF['hosts'][0].include?('.local')
			trigger.info = "\n\e[33mWARNING: The hosts URL does not contain .local.\nYou will need to edit your hosts file for this URL to resolve.\e[0m"
		end
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
		# The `virtualbox` value has been deprecated to use `virtualmachine`.
		if CONF['virtualmachine']
			vb.memory = CONF['virtualmachine']['memory'] if CONF['virtualmachine']['memory']
			vb.cpus = CONF['virtualmachine']['cpus'] if CONF['virtualmachine']['cpus']
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
	 	vb.customize [ "guestproperty", "set", :id, "/Chassis/synced_folders", JSON.dump( full_synced ) ]
		# Ensure the VM has network access, see https://stackoverflow.com/a/18457420. This is another workaround for Windows.
		vb.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
		vb.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
	end

	if CONF['_mode'] == "normal"
		# Allow insecure boxes for Windows
		config.vm.box_download_insecure = true
		# Use the Chassis box we've built with the default config.
		config.vm.box = "chassis/chassis"
		config.vm.box_version = ">= 6.0, < 7.0"
	elsif CONF['_mode'] == "custom"
		config.vm.box = CONF['box']
	else
		# We <3 Ubuntu LTS
		if CONF['_mode'] == "normal"
			config.vm.box = 'chassis/chassis'
		else
			config.vm.box = 'bento/ubuntu-24.04'
		end
	end

	# The vmware_desktop Provider overrides.
	config.vm.provider :vmware_desktop do |_v, override|

		# Vagrant currently runs under Rosetta on Apple Silicon devices. As a result,
		# this seems to be the most reliable way to detect whether or not we're
		# running under ARM64.
		if Etc.uname[:version].include? 'ARM64'
			if CONF['_mode'] == "normal"
				override.vm.box = 'chassis/chassis-arm64'
			else
				override.vm.box = 'bento/ubuntu-24.04-arm64'
			end
		end
	end

	config.vm.provider "parallels" do |prl|
		# Use memory and CPU settings from yaml config file.
		# The `virtualbox` value has been deprecated to use `virtualmachine`.
		if CONF['virtualmachine']
			prl.memory = CONF['virtualmachine']['memory'] if CONF['virtualmachine']['memory']
			prl.cpus = CONF['virtualmachine']['cpus'] if CONF['virtualmachine']['cpus']
		end
	end

	config.vm.provider "vmware_desktop" do |v|
		# Use memory and CPU settings from yaml config file.
		# The `virtualbox` value has been deprecated to use `virtualmachine`.
		if CONF['virtualmachine']
			v.vmx["memsize"] = CONF['virtualmachine']['memory'] if CONF['virtualmachine']['memory']
			v.vmx["numvcpus"] = CONF['virtualmachine']['cpus'] if CONF['virtualmachine']['cpus']
		end
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
	if CONF['ip'] == "dhcp" and ! Etc.uname[:version].include? 'ARM64'
		config.vm.network :private_network, type: "dhcp"
	else
		# Apple Silicon DHCP is broken in VirtualBox, so force a static IP.
		if CONF['ip'] == "dhcp"
			config.vm.network :private_network, ip: "192.168.1.110"
		else
			config.vm.network :private_network, ip: CONF['ip']
		end
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

	config.vm.provider :parallels do |_v, override|
		mount_opts = CONF['nfs'] ? [] : ["share"]
		synced_folders.each do |from, to|
			override.vm.synced_folder from, to, :mount_options => mount_opts, :nfs => CONF['nfs'], :group => 'www-data', :owner => 'vagrant'
		end
	end

	config.vm.provider :vmware_desktop do |_v, override|
		mount_opts = CONF['nfs'] ? [] : ["umask=002"]
		synced_folders.each do |from, to|
			override.vm.synced_folder from, to, :mount_options => mount_opts, :nfs => CONF['nfs'], :group => 'www-data', :owner => 'vagrant'
		end
	end

	config.vm.provider :vmware_desktop do |vmware|
		vmware.vmx["ethernet0.pcislotnumber"] = "160"
		vmware.vmx["ethernet1.pcislotnumber"] = "224"
	end


	# Change directories to /vagrant and use the correct shell.
	if CONF['extensions'] and (CONF['extensions'].include? "fish" or CONF['extensions'].include? "chassis/fish")
		config.ssh.extra_args = ["-t", "cd /vagrant; fish -l"]
	else
		config.ssh.extra_args = ["-t", "cd /vagrant; bash -l"]
	end

	# Success?
end
