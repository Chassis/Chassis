# We want PHP 5.4
apt::ppa { "ppa:ondrej/php5-oldstable": }

package {'php5-fpm':
	ensure => latest,
	require => Apt::Ppa['ppa:ondrej/php5-oldstable']
}
package { 'php5-curl':
	ensure => latest,
	require => Package['php5-fpm']
}

package { 'php5-imagick':
	ensure => latest,
	require => Package['php5-fpm']
}

package { 'php5-xdebug':
	ensure => latest,
	require => Package['php5-fpm']
}

class { 'mysql::php':
	require => [ Class['mysql::server'], Package['php5-fpm'] ],
}

class { 'mysql::server':
	config_hash => { 'root_password' => 'password' }
}

class {'sennza': }

sennza::wp {'vagrant.local':
  hosts => parsejson($extra_hosts),
	location => '/vagrant',
	database => 'wordpress',
	database_user => 'wordpress',
	database_password => 'vagrantpassword',

	require  => [
		Package['php5-fpm'],
		Package['php5-imagick'],
		Package['php5-xdebug'],
		Class['mysql::server'],
		Class['mysql::php']
	]
}