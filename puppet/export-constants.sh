#!/bin/bash

touch /etc/chassis-constants

echo -n "{" > /etc/chassis-constants

# Export synced folders configuration to $CHASSIS_SYNCED_FOLDERS
synced_folders=`VBoxControl --nologo guestproperty get /Chassis/synced_folders 2>/dev/null`
if [[ $synced_folders == "Value: "* ]]; then
	echo -n "\"synced_folders\":${synced_folders:7}" >> /etc/chassis-constants
fi

echo -n "}" >> /etc/chassis-constants
chmod a+r /etc/chassis-constants
