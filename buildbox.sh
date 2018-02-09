#!/bin/bash
# A script to build a new base box for Vagrant cloud. This needs to be run
# on the host computer and not instead the virtual machine.

# You need to have https support for curl. If you have Brew you can do that by
# running the following commands in a terminal:
# `brew install curl --with-nghttp2`
# `brew link curl --force`
VM_STATUS=`vagrant status --machine-readable | grep state,running`
NOW=`date +%Y-%m-%d`
if [ ! $VM_STATUS ]; then
	echo "We need to boot up your Vagrant box to ensure some files have been deleted before generating the new base box."
	vagrant up
fi
# Delete the chassis-provisioned file as we don't want that in the base box.
/usr/local/bin/vagrant ssh -- -t 'sudo rm -f /etc/chassis-provisioned;'

echo "We are now ready to halt the VM and generate the base box"

vagrant halt
## Build the base box
vagrant package --output "chassis-$NOW.box"

RESPONSE=$(curl --silent --header "Authorization: Bearer IUyNUyTJLfJ0rw.atlasv1.BlPei9QC5xGystKl2BlUyDUnPLqudHomBclhHZNzv0C0apjkHN6ikfKqvErpAsfoXFQ" https://app.vagrantup.com/api/v1/box/chassis/chassis/version/1.0.0/provider/virtualbox/upload)

# Requires the jq command
upload_path=$(echo "$RESPONSE" | jq -r .upload_path)

echo "Commencing upload of the new Chassis box to Vagrant Cloud..."

curl $upload_path --request PUT --upload-file "chassis-$NOW.box" --progress-bar | tee /dev/null

echo "Upload complete!"
