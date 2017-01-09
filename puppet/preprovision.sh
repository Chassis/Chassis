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
		echo "deb $MIRROR xenial $REPOS"           >> /tmp/mirrors-sources.list
		echo "deb $MIRROR xenial-updates $REPOS"   >> /tmp/mirrors-sources.list
		echo "deb $MIRROR xenial-backports $REPOS" >> /tmp/mirrors-sources.list
		echo "deb $MIRROR xenial-security $REPOS"  >> /tmp/mirrors-sources.list

		# Add mirrors to the start
		cat /tmp/mirrors-sources.list /etc/apt/sources.list > /tmp/apt-sources.list

		# Move into place
		cp /etc/apt/sources.list /etc/apt/sources.list.bak
		mv /tmp/apt-sources.list /etc/apt/sources.list

		# Remove temp files
		rm /tmp/mirrors-sources.list /tmp/apt-sources.list
	fi

	# Update apt
	sudo apt-get update

	# Install/Upgrade Puppet
	sudo apt-get -q -y install puppet

	touch /etc/chassis-updated
fi

# Check for existing table prefixes to update them.
CHECK_PREFIX=$2
if [[ ! -z $CHECK_PREFIX ]] && hash mysql 2>/dev/null; then
	# MySQL is installed, so we probably already have an install here.
	# Check for tables starting with anything that isn't `wp_`
	HAS_OTHERS=$(HOME=/root/ mysql wordpress -e 'SHOW TABLES' -s | grep -v -e '^wp_')
	if [[ ! -z $HAS_OTHERS ]]; then
		echo "Warning: Since 2016-11-25, Chassis requires defining database.prefix in your"
		echo "config.yaml. I found other tables in your database:"
		echo
		echo "$HAS_OTHERS"
		echo
		echo "You should define database.prefix in your config.local.yaml."
		exit 1
	fi
fi
