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

	file {'/etc/nginx/nginx.conf':
		content => template('sennza/nginx.conf.erb'),
		require => Package['nginx']
	}
}