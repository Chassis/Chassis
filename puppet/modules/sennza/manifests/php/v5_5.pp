class sennza::php::v5_4 (
	$extensions = [],
) {
	# Use the new PPA!
	apt::ppa { "ppa:ondrej/php5": }

	include sennza::php::v5
}