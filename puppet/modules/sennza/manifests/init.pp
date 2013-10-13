class sennza {
	if ! defined(Package['nginx']) {
		package {'nginx':
			ensure => latest
		}
	}
	if ! defined(Package['php5-fpm']) {
		package {'php5-fpm':
			ensure => latest
		}
	}
	service { 'nginx':
		ensure     => running,
		enable     => true,
		hasrestart => true,
		restart    => '/etc/init.d/nginx reload',
		require    => Package['nginx']
	}

	service { 'php5-fpm':
  	ensure     => running,
  	enable     => true,
  	hasrestart => true,
  	hasstatus  => true,
  	require    => Package['php5-fpm'],
  	subscribe => File['/etc/php5/fpm/conf.d/xdebug.ini'],
	}

	file {'/etc/nginx/nginx.conf':
		content => template('sennza/nginx.conf.erb'),
		require => Package['nginx']
	}
}