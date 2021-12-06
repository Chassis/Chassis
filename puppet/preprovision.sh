# Suppress the warnings the Ruby warnings Puppet causes on Focal Fossa.
echo "export RUBYOPT='-W0'" >> /etc/environment
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
		echo "deb $MIRROR focal $REPOS"           >> /tmp/mirrors-sources.list
		echo "deb $MIRROR focal-updates $REPOS"   >> /tmp/mirrors-sources.list
		echo "deb $MIRROR focal-backports $REPOS" >> /tmp/mirrors-sources.list
		echo "deb $MIRROR focal-security $REPOS"  >> /tmp/mirrors-sources.list

		# Add mirrors to the start
		cat /tmp/mirrors-sources.list /etc/apt/sources.list > /tmp/apt-sources.list

		# Move into place
		cp /etc/apt/sources.list /etc/apt/sources.list.bak
		mv /tmp/apt-sources.list /etc/apt/sources.list

		# Remove temp files
		rm /tmp/mirrors-sources.list /tmp/apt-sources.list
	fi

	# Clean apt
	sudo rm -r /var/lib/apt/lists/

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
	HAS_OTHERS=$(HOME=/root/ mysql wordpress -e 'SHOW TABLES' -s 2>/dev/null | grep -v -e 'wp_\|test_')
	if [[ ! -z $HAS_OTHERS ]]; then
		>&2 echo "ERROR: Since 2016-11-25, Chassis requires defining database.prefix in your"
		>&2 echo "config.yaml. I found other tables in your database:"
		>&2 echo " "
		>&2 echo "$HAS_OTHERS" | sed s/^/\\t/
		>&2 echo " "
		>&2 echo "You MUST define database.prefix in your config.local.yaml."
		exit 1
	fi
fi

# Don't set the value to "/vagrant/extensions/*/chassis.pp" if there's no
# extensions (that's a literal asterisk, by the way)
shopt -s nullglob

# Symlink extension Puppet files into place
for file in /vagrant/extensions/*/chassis.pp; do
	extension=$(basename $(dirname $file))
	ln -f -s "$file" "/vagrant/puppet/manifests/$extension.pp"
done
