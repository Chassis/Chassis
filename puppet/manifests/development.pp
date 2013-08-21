# We want PHP 5.4
apt::ppa { "ppa:ondrej/php5-oldstable": }

package {'php5-fpm':
	ensure => latest
}
class { 'mysql::php':
	require => [ Class['mysql::server'], Package['php5-fpm'] ],
}

class { 'mysql::server':
	config_hash => { 'root_password' => 'password' }
}

class {'sennza': }

sennza::wp {'vagrant.local':
	location => '/vagrant',
	database => 'wordpress',
	database_user => 'wordpress',
	database_password => 'vagrantpassword',

	require  => [
		Package['php5-fpm'],
		Class['mysql::server'],
		Class['mysql::php']
	]
}