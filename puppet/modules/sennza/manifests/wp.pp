define sennza::wp (
	$location,
	$wpdir = 'wp',
	$contentdir = 'content',
	$hosts = [],
	$database = 'wordpress',
	$database_user = 'root',
	$database_password = 'password',
	$database_host = 'localhost',
	$admin_user     = 'admin',
	$admin_email    = 'admin@example.com',
	$admin_password = 'password',
	$network = false,

	$extensions = [],
) {
	if ( $network == true ) {
		sennza::network { $name:
			location          => $location,
			wpdir             => $wpdir,
			contentdir        => $contentdir,
			hosts             => $hosts,
			database          => $database,
			database_user     => $database_user,
			database_password => $database_password,
			database_host     => $database_host,
			admin_user        => $admin_user,
			admin_email       => $admin_email,
			admin_password    => $admin_password,
		}
	}
	else {
		sennza::site { $name:
			location          => $location,
			wpdir             => $wpdir,
			contentdir        => $contentdir,
			hosts             => $hosts,
			database          => $database,
			database_user     => $database_user,
			database_password => $database_password,
			database_host     => $database_host,
			admin_user        => $admin_user,
			admin_email       => $admin_email,
			admin_password    => $admin_password,
		}
	}

	file { '/vagrant/index.php':
		content => template('sennza/index.php.erb')
	}

	file { '/vagrant/local-config-db.php':
		content => template('sennza/local-config-db.php.erb')
	}

	file { '/vagrant/local-config-extensions.php':
		content => template('sennza/local-config-extensions.php.erb')
	}
}