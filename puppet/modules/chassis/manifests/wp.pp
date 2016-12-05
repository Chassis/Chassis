define chassis::wp (
	$location,
	$wpdir = 'wp',
	$contentdir = 'content',
	$hosts = [],
	$database = 'wordpress',
	$database_user = 'root',
	$database_password = 'password',
	$database_host = 'localhost',
	$database_prefix = 'wp_',
	$admin_user     = 'admin',
	$admin_email    = 'admin@example.com',
	$admin_password = 'password',
	$network = false,
	$plugins = [],
	$themes = [],

	$extensions = [],
) {
	$subdomains = ( $network == "subdomains" )
	if ( $network ) {
		chassis::network { $name:
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
		chassis::site { $name:
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
		content => template('chassis/index.php.erb')
	}

	file { '/vagrant/local-config-db.php':
		content => template('chassis/local-config-db.php.erb')
	}

	file { '/vagrant/local-config-extensions.php':
		content => template('chassis/local-config-extensions.php.erb')
	}

	file { '/home/vagrant/.wp-cli':
		ensure => directory
	}

	file { '/home/vagrant/.wp-cli/config.yml':
		content => template('chassis/wp-cli.yml.erb')
	}

	wp::plugin { $plugins:
		location => $location,
		ensure   => 'enabled',
	}

	wp::theme { $themes:
		location => $location,
		ensure   => 'enabled',
	}
}
