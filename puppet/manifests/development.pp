# Load extensions
import "/vagrant/extensions/*/chassis.pp"

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

package { 'php5-gd':
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

package { 'git-core':
	ensure => installed
}

class { 'apt':
 	update_timeout       => undef
}

class { 'mysql::php':
	require => [ Class['mysql::server'], Package['php5-fpm'] ],
}

class { 'mysql::server':
	config_hash => { 'root_password' => 'password' }
}

class {'sennza': }

$config = sz_load_config('/vagrant')
$extensions = sz_extensions('/vagrant/extensions')

sennza::wp { $config['hosts'][0]:
	location          => '/vagrant',

	wpdir             => $config[wpdir],
	hosts             => $config[hosts],
	database          => $config[database][name],
	database_user     => $config[database][user],
	database_password => $config[database][password],
	network           => $config[multisite],

	extensions        => $extensions,

	require  => [
		Package['php5-fpm'],
		Package['php5-gd'],
		Package['php5-imagick'],
		Package['php5-xdebug'],
		Package['git-core'],
		Class['mysql::server'],
		Class['mysql::php']
	]
}
