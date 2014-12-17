# -*- mode: ruby -*-
# vi: set ft=ruby :

require "yaml"

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
	config.vm.box = "hashicorp/precise64"

	# Having access would be nice.
	if CONF['ip'] == "dhcp"
		config.vm.network :private_network, type: "dhcp"
	else
		config.vm.network :private_network, ip: CONF['ip']
	end
	config.vm.hostname = CONF['hosts'][0]

	# Before any other provisioning, ensure that we're up-to-date
	preprovision_args = [
		CONF['apt_mirror'].to_s
	]
	config.vm.provision :shell, :path => "puppet/preprovision.sh", :args => preprovision_args

	# Provision our setup with Puppet
	config.vm.provision :shell do |shell|
		shell.inline = "puppet apply $@"
		shell.keep_color = true

		shell.args = []

		# Set up the module path
		module_paths.map! { |rel_path| "/vagrant/" + rel_path }
		shell.args.push("--basemodulepath " +  module_paths.join( ':' ).inspect)

		# Set up the full environment
		shell.args.push("--confdir /vagrant/puppet")
		shell.args.push("--environment development")
		shell.args.push("--hiera_config /dev/null")

		# Set the actual manifest to provision with
		shell.args.push("/vagrant/puppet/manifests")

		# Uncomment this line to turn debugging on:
		# shell.args.push("--verbose --debug")

		# Ensure Puppet doesn't escape our arguments
		shell.args = shell.args.join(" ")
	end

	# Ensure that WordPress can install/update plugins, themes and core
	if vagrant_version >= "1.3.0"
		config.vm.synced_folder ".", "/vagrant", :mount_options => [ "dmode=777,fmode=777" ]
	else
		config.vm.synced_folder ".", "/vagrant", :extra => "dmode=777,fmode=777"
	end

	# Success?
end
