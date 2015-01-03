if [[ $1 == "false" ]]; then
	# Ignore mirrors completely
	MIRROR=""
elif [[ $1 == "true" ]]; then
	# Use Ubuntu's mirror detection
	MIRROR="mirror://mirrors.ubuntu.com/mirrors.txt"
else
	# Explicit mirror, use it
	MIRROR=$1
fi

if [[ ! -f /etc/chassis-updated ]]; then
	if [[ ! -z $MIRROR ]]; then
		REPOS="main restricted universe multiverse"

		touch /tmp/mirrors-sources.list
		echo "deb $MIRROR precise $REPOS"           >> /tmp/mirrors-sources.list
		echo "deb $MIRROR precise-updates $REPOS"   >> /tmp/mirrors-sources.list
		echo "deb $MIRROR precise-backports $REPOS" >> /tmp/mirrors-sources.list
		echo "deb $MIRROR precise-security $REPOS"  >> /tmp/mirrors-sources.list

		# Add mirrors to the start
		cat /tmp/mirrors-sources.list /etc/apt/sources.list > /tmp/apt-sources.list

		# Move into place
		cp /etc/apt/sources.list /etc/apt/sources.list.bak
		mv /tmp/apt-sources.list /etc/apt/sources.list

		# Remove temp files
		rm /tmp/mirrors-sources.list /tmp/apt-sources.list
	fi

	# Allow Puppet to be upgraded
	# (Note that preicse's package is 2.7, so we need the custom deb)
	wget https://apt.puppetlabs.com/puppetlabs-release-precise.deb
	dpkg -i puppetlabs-release-precise.deb

	# Update apt
	sudo apt-get update

	# Install/Upgrade Puppet
	sudo apt-get -q -y install puppet

	touch /etc/chassis-updated
fi
