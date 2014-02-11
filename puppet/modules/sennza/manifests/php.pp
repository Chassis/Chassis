class sennza::php (
	$extensions = [],
	$version = "5.4",
) {
	# Chose the PHP package we want
	$subpackage = $config[php] ? {
		"5.3" => 'sennza::php::v5_3',
		"5.4" => 'sennza::php::v5_4',
		"5.5" => 'sennza::php::v5_5',
		"hhvm" => 'sennza::php::hhvm',
	}
	class { $subpackage:
		extensions => $extensions,
	}
}