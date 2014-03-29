# Load extensions
import "/vagrant/extensions/*/chassis.pp"

$config = sz_load_config('/vagrant')
$extensions = sz_extensions('/vagrant/extensions')
$php_extensions = [ 'curl', 'gd', 'mysql' ]

Class['mysql'] -> Package['php5-mysql']

class { 'sennza::php':
	extensions => $php_extensions,
	version => $config[php]
}

package { 'git-core':
	ensure => installed
}

class { 'apt':
 	update_timeout       => undef
}

class { 'mysql::server':
	config_hash => { 'root_password' => 'password' }
}

class { 'sennza':
	require => Class['sennza::php'],
}

sennza::wp {'vagrant.local':
	location          => '/vagrant',

	wpdir             => $config[wpdir],
	hosts             => $config[hosts],
	database          => $config[database][name],
	database_user     => $config[database][user],
	database_password => $config[database][password],
	network           => $config[multisite],

	extensions        => $extensions,

	require  => [
		Class['sennza::php'],
		Package['git-core'],
		Class['mysql::server'],
	]
}
