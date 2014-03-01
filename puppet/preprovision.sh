if [[ ! -f /etc/chassis-updated ]]; then
	MIRROR="mirror://mirrors.ubuntu.com/mirrors.txt"
	REPOS="main restricted universe multiverse"

	echo "deb $MIRROR precise $REPOS"           >> /etc/apt/sources.list
	echo "deb $MIRROR precise-updates $REPOS"   >> /etc/apt/sources.list
	echo "deb $MIRROR precise-backports $REPOS" >> /etc/apt/sources.list
	echo "deb $MIRROR precise-security $REPOS"  >> /etc/apt/sources.list

	apt-get update

	touch /etc/chassis-updated
fi
