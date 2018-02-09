#!/bin/bash
# A script to build a new base box for Vagrant Cloud. This needs to be run
# on the host computer and not inside the virtual machine.

# You need to have https support for curl. If you have Brew you can do that by
# running the following commands in a terminal:
# `brew install curl --with-nghttp2`
# `brew link curl --force`
#
# To run this just run `sh buildbox.sh` in the root directory of Chassis.
# Please note that due to the size of the base boxes you'll want to have a connection with a good upload speed.

# Check for curl
if ! [ -x "$(command -v curl)" ]; then
  echo 'Curl is not installed. Please install curl. `brew install curl --with-nghttp2; brew link curl --force`' >&2
  exit 1
fi

# Check for jq
if ! [ -x "$(command -v jq)" ]; then
  echo 'jq is not installed. Please install jq: `brew install jq`.' >&2
  exit 1
fi

# Store the virtual machines status.
VM_STATUS=`vagrant status --machine-readable | grep state,running`

# Create a timestamp to use in the boxes filename.
NOW=`date +%Y-%m-%d-%H:%M:%S`

if [ ! $VM_STATUS ]; then
	echo "\033[0;32mWe need to boot up your Vagrant box to ensure some files have been deleted before generating the new base box."
	vagrant up
fi

# Delete the chassis-provisioned and any custom config files as we don't want that in the base box.
/usr/local/bin/vagrant ssh -- -t 'sudo rm -f /etc/chassis-provisioned; sudo rm -f /vagrant/content/config.local.yaml; sudo rm -f /vagrant/content/config.yaml; '

echo "\033[0;32mWe are now ready to halt the VM and generate the base box.\033[0m"

vagrant halt

## Build the base box
vagrant package --output "chassis-$NOW.box"

# Prompt for a token so we can upload the new box to Vagrant Cloud.
echo "\033[0;32mWe now need you to copy and paste your Vagrant Cloud authenication token: https://app.vagrantup.com/settings/security\033[0m"
read -sp 'Token: ' TOKEN

# We need to get an upload path from the Vagrant Cloud API.
RESPONSE=$(curl --silent --header "Authorization: Bearer $TOKEN" https://app.vagrantup.com/api/v1/box/chassis/chassis/version/1.0.0/provider/virtualbox/upload)

# Requires the jq command.
UPLOAD_PATH=$(echo "$RESPONSE" | jq -r .upload_path)

if [ null == $UPLOAD_PATH ]; then
	echo "\n\033[0;31mThere was an issue with your token for Vagrant Cloud.\033[0m"
	exit 1
fi

echo "\n\033[0;32mCommencing upload of the new Chassis box to Vagrant Cloud..."

# Do a put request to the Vagrant Cloud endpoint and output the progress to the terminal.
curl $UPLOAD_PATH --request PUT --upload-file "chassis-$NOW.box" --progress-bar | tee /dev/null

echo "\n\033[0;32mUpload complete!"
