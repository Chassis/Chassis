#!/bin/bash

ask() {
	QUESTION="$1"
	while true; do
		echo
		read -r -p "$QUESTION [y/N] " SHOULD_DO
		SHOULD_DO=$(echo "$SHOULD_DO" | tr '[:upper:]' '[:lower:]')
		case $SHOULD_DO in
			y|yes)
				echo "y"
				return
				;;
			n|no|"")
				return
				;;
			* )
				echo "Please answer yes or no."
				;;
		esac
	done
}

DESTROY=$(ask "Drop all WordPress tables and reinstall?")

if [ ! -z $DESTROY ]; then
	wp db clean --yes
	cd extensions
	EXTENSIONS="/vagrant/puppet/modules:"
	for d in * ; do
	EXTENSIONS="${EXTENSIONS}/vagrant/extensions/${d}/modules:"
	done
	# Reinstall WordPress with Puppet
	sudo puppet apply --basemodulepath $EXTENSIONS --confdir /vagrant/puppet /vagrant/puppet/manifests
fi
