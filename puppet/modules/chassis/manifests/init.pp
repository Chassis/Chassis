# Install the main packages we need.
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

	if ! defined(Exec['systemctl-daemon-reload']) {
		exec {'systemctl-daemon-reload':
			refreshonly => true,
			path        => '/bin',
			command     => 'systemctl daemon-reload',
		}
	}

	exec {'restart-avahi':
		path        => '/bin',
		command     => 'systemctl restart avahi-daemon.service',
	}

	exec {'restart-ssh':
		path        => '/bin',
		command     => 'systemctl restart ssh',
	}

	# Enable ssh-rsa on Jammy Jellyfish
	file { "/etc/ssh/sshd_config.d/ssh-rsa.conf":
		content => template('chassis/ssh-rsa.conf.erb'),
		notify  => Exec['restart-ssh']
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
		notify  => Service['nginx']
	}
}
