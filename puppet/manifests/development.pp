# Load extensions
import "/vagrant/extensions/*/chassis.pp"

$config = sz_load_config()
$extensions = sz_extensions('/vagrant/extensions')
$php_extensions = [ 'curl', 'gd', 'mysql' ]

Class['mysql'] -> Package['php5-mysql']

class { 'chassis::php':
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

class { 'chassis':
	require => Class['chassis::php'],
}

class { 'chassis::hosts': }

chassis::wp { $config['hosts'][0]:
	location          => $config[mapped_paths][base],
	wpdir             => $config[mapped_paths][wp],
	contentdir        => $config[mapped_paths][content],

	hosts             => $config[hosts],
	database          => $config[database][name],
	database_user     => $config[database][user],
	database_password => $config[database][password],
	network           => $config[multisite],
	admin_user        => $config[admin][user],
	admin_email       => $config[admin][email],
	admin_password    => $config[admin][password],

	extensions        => $extensions,

	require  => [
		Class['chassis::php'],
		Package['git-core'],
		Class['mysql::server'],
	]
}
