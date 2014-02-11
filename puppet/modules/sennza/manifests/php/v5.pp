class sennza::php::v5 (
	$extensions = [],
) {
	package {'php5-fpm':
		ensure => latest,
	}

	$prefixed_extensions = prefix($extensions, 'php5-')
	package { $prefixed_extensions:
		ensure => latest,
		require => Package[ 'php5-fpm' ]
	}

	service { 'php5-fpm':
		ensure     => running,
		enable     => true,
		hasrestart => true,
		hasstatus  => true,
		require    => Package['php5-fpm'],
		subscribe  => File['/etc/php5/fpm/conf.d/xdebug.ini'],
	}

	if 'xdebug' in $extensions {
		file { '/etc/php5/fpm/conf.d/xdebug.ini':
			content => template('sennza/xdebug.ini.erb'),
			owner   => 'root',
			group   => 'root',
			mode    => 0644,
			require => Package['php5-fpm','php5-xdebug'],
			ensure  => 'present',
			notify  => Service['php5-fpm'],
		}
	}

	file { '/etc/php5/fpm/php.ini':
		content => template('sennza/php.ini.erb'),
		owner   => 'root',
		group   => 'root',
		mode    => 0644,
		require => Package['php5-fpm'],
		ensure  => 'present',
		notify  => Service['php5-fpm'],
	}
}