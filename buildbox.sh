#!/bin/bash
# A script to build a new base box for Vagrant cloud. This needs to be run
# on the host computer and not instead the virtual machine.
#VM_STATUS=`vagrant status --machine-readable | grep state,running`
#NOW=`date +%Y-%m-%d`
#if [ ! $VM_STATUS ]; then
#	vagrant up
#fi
## Delete the chassis-provisioned file as we don't want that in the base box.
#/usr/local/bin/vagrant ssh -- -t 'sudo rm -f /etc/chassis-provisioned;'
#
#vagrant halt
## Build the base box
#vagrant package --output "chassis-$NOW.box"

RESPONSE=$(curl --header "Authorization: Bearer IUyNUyTJLfJ0rw.atlasv1.BlPei9QC5xGystKl2BlUyDUnPLqudHomBclhHZNzv0C0apjkHN6ikfKqvErpAsfoXFQ" https://app.vagrantup.com/api/v1/box/chassis/chassis/version/1.0.0/provider/virtualbox/upload)

echo "$RESPONSE"

# Requires the jq command
upload_path=$(echo "$RESPONSE" | jq .upload_path)

echo $upload_path

#curl $upload_path --request PUT --upload-file "chassis-$NOW.box"
curl --http2 $upload_path --request PUT --upload-file "chassis-2017-12-12.box"
