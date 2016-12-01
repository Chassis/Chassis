class chassis {
	if ! defined(Package['nginx']) {
		package {'nginx':
			ensure => latest
		}
	}

	if ! defined(Package['curl']) {
		package {'curl':
			ensure => latest
		}
	}

	if ! defined(Package['sendmail']) {
		package {'sendmail':}
	}

	service { 'nginx':
		ensure     => running,
		enable     => true,
		hasrestart => true,
		restart    => '/etc/init.d/nginx reload',
		require    => Package['nginx']
	}

	file {['/etc/nginx', '/etc/nginx/sites-available', '/etc/nginx/sites-enabled']:
		ensure => directory
	}

	file {'/etc/nginx/nginx.conf':
		content => template('chassis/nginx.conf.erb'),
		require => Package['nginx'],
		notify => Service['nginx']
	}
}
