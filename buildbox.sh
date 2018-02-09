#!/bin/bash
# A script to build a new base box for Vagrant Cloud. This needs to be run
# on the host computer and not instead the virtual machine.

# You need to have https support for curl. If you have Brew you can do that by
# running the following commands in a terminal:
# `brew install curl --with-nghttp2`
# `brew link curl --force`

# To run this just run `sh buildbox.sh` in the root directory of Chassis.

# Check for curl
if ! [ -x "$(command -v curl)" ]; then
  echo 'Curl is not installed. Please install curl.' >&2
  exit 1
fi

# Check for jq
if ! [ -x "$(command -v jq)" ]; then
  echo 'jq is not installed. Please install jq: https://stedolan.github.io/jq/.' >&2
  exit 1
fi

VM_STATUS=`vagrant status --machine-readable | grep state,running`
NOW=`date +%Y-%m-%d`

if [ ! $VM_STATUS ]; then
	echo "We need to boot up your Vagrant box to ensure some files have been deleted before generating the new base box."
	vagrant up
fi

# Delete the chassis-provisioned and any custom config files as we don't want that in the base box.
/usr/local/bin/vagrant ssh -- -t 'sudo rm -f /etc/chassis-provisioned; sudo rm -f /vagrant/content/config.local.yaml; sudo rm -f /vagrant/content/config.yaml; '

echo "We are now ready to halt the VM and generate the base box."

vagrant halt

## Build the base box
vagrant package --output "chassis-$NOW.box"

# Prompt for a token so we can upload the new box to Vagrant Cloud.
echo "We know need you to copy and paste your Vagrant Cloud authenication token: https://app.vagrantup.com/settings/security"
read -sp 'Token: ' token

# We need to get an upload path from the Vagrant Cloud API.
RESPONSE=$(curl --silent --header "Authorization: Bearer $token" https://app.vagrantup.com/api/v1/box/chassis/chassis/version/1.0.0/provider/virtualbox/upload)

# Requires the jq command.
upload_path=$(echo "$RESPONSE" | jq -r .upload_path)

echo "\nCommencing upload of the new Chassis box to Vagrant Cloud..."

curl $upload_path --request PUT --upload-file "chassis-$NOW.box" --progress-bar | tee /dev/null

echo "Upload complete!"
