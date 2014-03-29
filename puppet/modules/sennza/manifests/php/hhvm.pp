class sennza::php::hhvm (
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

	# Ignore extensions
	# $extensions.each {|$ext|
	# 	package {"php5-${ext}":
	# 		ensure => latest,
	# 		require => Package[ 'php5-fpm' ]
	# 	}
	# }

	file { '/etc/hhvm.hdf':
		content => template('sennza/hhvm.hdf.erb'),
		owner   => 'root',
		group   => 'root',
		mode    => 0644,
		require => Package['hhvm-fastcgi'],
		ensure  => 'present',
		# notify  => Service['hhvm'],
	}
}