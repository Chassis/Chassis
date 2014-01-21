define sennza::wp (
	$location,
	$hosts = [],
	$database = 'wordpress',
	$database_user = 'root',
	$database_password = 'password',
	$database_host = 'localhost',
	$network = false,
) {
	if ( $network == true ) {
		sennza::network { $name:
			location => $location,
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

	file { '/etc/php5/fpm/conf.d/xdebug.ini':
        content => template('sennza/xdebug.ini.erb'),
        owner   => 'root',
        group   => 'root',
        mode    => 0644,
        require => Package['php5-fpm','php5-xdebug'],
        ensure => 'present',
        notify => Service['php5-fpm'],
    }

	file { '/etc/php5/fpm/php.ini':
        content => template('sennza/php.ini.erb'),
        owner   => 'root',
        group   => 'root',
        mode    => 0644,
        require => Package['php5-fpm'],
        ensure => 'present',
        notify => Service['php5-fpm'],
    }
}