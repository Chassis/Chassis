#!/bin/bash
# A script to build a new base box for Vagrant Cloud. This needs to be run
# on the host computer and not inside the virtual machine.

# To run this just run `sh buildbox.sh` in the root directory of Chassis.
# Please note that due to the size of the base boxes you'll want to have a connection with a good upload speed.

# Store the virtual machines status.
VM_STATUS=`vagrant status --machine-readable | grep state,running`

# Create a timestamp to use in the boxes filename.
NOW=`date +%Y-%m-%d-%H:%M:%S`

if [ ! $VM_STATUS ]; then
	echo "\033[0;32mWe need to boot up your Vagrant box to ensure some files have been deleted before generating the new base box."
	vagrant up
fi

# Delete the chassis-provisioned and any custom config files as we don't want that in the base box.
/usr/local/bin/vagrant ssh -- -c 'cd /home/vagrant; sudo apt-get update; sudo rm -f /etc/chassis-provisioned; sudo rm -f /vagrant/content/config.local.yaml; sudo rm -f /vagrant/content/config.yaml; '

echo "\033[0;32mAny custom .yaml files have now been deleted.\033[0m"

# Clear any logs and errors that might be on the box.

/usr/local/bin/vagrant ssh -- -c 'cd /home/vagrant; sudo rm -f /etc/chassis-provisioned; sudo rm -f /var/log/php/*; sudo rm -f /var/log/nginx/*;'

echo "\033[0;32mAny PHP and Nginx logs have been deleted.\033[0m"

# Delete the WordPress database.

/usr/local/bin/vagrant ssh -- -c 'cd /home/vagrant; wp db drop --yes'

echo "\033[0;32mThe WordPress database has been successfully dropped.\033[0m"

echo "\033[0;32mWe are now ready to halt the VM and generate the base box.\033[0m"

# Clean up the items on the box we don't need.

echo "\033[0;32mInitialising box cleanup...\033[0m"

/usr/local/bin/vagrant ssh -- -c 'cd /home/vagrant; sudo sh /vagrant/cleanup.sh'

echo "\033[0;32mBox cleanup completed.\033[0m"

echo "\033[0;32mInitialising box minimisation...\033[0m"

/usr/local/bin/vagrant ssh -- -c 'cd /home/vagrant; sudo sh /vagrant/minimise.sh'

echo "\033[0;32mBox minimisation completed.\033[0m"

vagrant halt

# The version number of the base box.
VERSION=5.4.2

## Build the base box
vagrant package --output "chassis-$NOW.box"

echo "\n\033[0;32mCommencing upload of the new Chassis box to Vagrant Cloud..."

vagrant cloud publish chassis/chassis $VERSION virtualbox chassis-$NOW.box --release

echo "\n\033[0;32mUpload complete!"
