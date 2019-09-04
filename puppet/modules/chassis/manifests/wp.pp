# Install our WordPress site and add our configuration.
define chassis::wp (
	$location,
	$upload_size,
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
	$sitename       = 'Chassis Site',
	$network = false,

	$extensions = [],
	$global_extensions = [],
) {
	$subdomains = ( $network == 'subdomains' )
	if ( $network ) {
		chassis::network { $name:
			location          => $location,
			subdomains        => $subdomains,
			wpdir             => $wpdir,
			contentdir        => $contentdir,
			upload_size       => $upload_size,
			hosts             => $hosts,
			database          => $database,
			database_user     => $database_user,
			database_password => $database_password,
			database_host     => $database_host,
			admin_user        => $admin_user,
			admin_email       => $admin_email,
			admin_password    => $admin_password,
			require           => [
				File['/vagrant/local-config-db.php'],
				File['/vagrant/local-config-extensions.php'],
			],
		}
	}
	else {
		chassis::core { $name:
			location          => $location,
			wpdir             => $wpdir,
			contentdir        => $contentdir,
			upload_size       => $upload_size,
			hosts             => $hosts,
			database          => $database,
			database_user     => $database_user,
			database_password => $database_password,
			database_host     => $database_host,
			admin_user        => $admin_user,
			admin_email       => $admin_email,
			admin_password    => $admin_password,
			sitename          => $sitename,
			require           => [
				File['/vagrant/local-config-db.php'],
				File['/vagrant/local-config-extensions.php'],
			],
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
		ensure => directory,
		owner  => 'vagrant',
	}

	file { '/home/vagrant/.wp-cli/config.yml':
		content => template('chassis/wp-cli.yml.erb')
	}
}
