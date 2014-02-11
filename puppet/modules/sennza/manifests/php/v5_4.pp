class sennza::php::v5_4 (
	$extensions = [],
) {
	# Use the oldstable PPA!
	apt::ppa { "ppa:ondrej/php5-oldstable": }

	include sennza::php::v5
}