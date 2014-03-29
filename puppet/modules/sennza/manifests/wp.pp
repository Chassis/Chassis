define sennza::wp (
	$location,
	$wpdir = 'wp',
	$hosts = [],
	$database = 'wordpress',
	$database_user = 'root',
	$database_password = 'password',
	$database_host = 'localhost',
	$network = false,

	$extensions = [],
) {
	if ( $network == true ) {
		sennza::network { $name:
			location => $location,
			wpdir => $wpdir,
			hosts => $hosts,
			database => $database,
			database_user => $database_user,
			database_password => $database_password,
			database_host => $database_host
		}
	}
	else {
		sennza::site { $name:
			location => $location,
			wpdir => $wpdir,
			hosts => $hosts,
			database => $database,
			database_user => $database_user,
			database_password => $database_password,
			database_host => $database_host,
		}
	}

	file { '/vagrant/local-config-db.php':
		content => template('sennza/local-config-db.php.erb')
	}

	file { '/vagrant/local-config-extensions.php':
		content => template('sennza/local-config-extensions.php.erb')
	}
}