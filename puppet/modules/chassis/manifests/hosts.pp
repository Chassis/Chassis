# Setup the avahi hosts
class chassis::hosts(
	$aliases = [],
) {
	package { [ 'avahi-daemon', 'python-avahi', 'python-pip' ]:
		ensure => latest,
	}

	exec { 'clone avahi aliases':
		command => 'git clone https://github.com/hmalphettes/avahi-aliases.git',
		path    => '/usr/bin',
		cwd     => '/home/vagrant',
		require => Package['git-core'],
		onlyif  => 'test ! -d /home/vagrant/avahi-aliases'
	}

	exec { 'install avahi aliases':
		command   => 'sudo ./install.sh',
		path      => '/usr/bin',
		cwd       => '/home/vagrant/avahi-aliases',
		require   => Exec['clone avahi aliases'],
		logoutput => true
	}

	file { '/lib/systemd/system/chassis-hosts.service':
		ensure => 'file',
		mode   => '0644',
		source => 'puppet:///modules/chassis/chassis-hosts.service',
		notify => Exec['systemctl-daemon-reload'],
	}

	file { '/etc/avahi/aliases':
		content => template('chassis/aliases.erb'),
		mode   => '0777',
	}

	file { '/vagrant/local-config-hosts.php':
		source => 'puppet:///modules/chassis/local-config-hosts.php',
		mode   => '0644',
	}

	service { 'chassis-hosts':
		ensure  => running,
		enable  => true,
		require => [
			Package[ 'avahi-daemon' ],
			Package[ 'python-avahi' ],
			File[ '/lib/systemd/system/chassis-hosts.service' ],
			File[ '/etc/avahi/aliases' ],
		]
}
}
