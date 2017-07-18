# Setup hhvm
class chassis::php::hhvm (
	$extensions = [],
) {
	apt::source { 'hhvm':
		location    => 'http://dl.hhvm.com/ubuntu',
		release     => 'precise',
		repos       => 'main',
		key_source  => 'http://dl.hhvm.com/conf/hhvm.gpg.key',
		include_src => false
	}

	# Use Ubuntu 12.04's built-in package
	package {'hhvm-fastcgi':
		ensure => latest,
	}

	file { '/etc/hhvm.hdf':
		ensure  => 'present',
		content => template('chassis/hhvm.hdf.erb'),
		owner   => 'root',
		group   => 'root',
		mode    => '0644',
		require => Package['hhvm-fastcgi'],
	}
}
