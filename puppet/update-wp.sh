if [[ -z $1 ]]; then
	echo "usage: update-wp.sh VERSION"
	echo
	echo "Update WordPress to a different version"
	echo
	echo "  VERSION: Version number to update to"
	exit 1
fi

git subtree pull --prefix=wp --squash git@github.com:WordPress/WordPress $1
