# Load extensions
import "/vagrant/extensions/*/chassis.pp"

$config = sz_load_config()
$extensions = sz_extensions('/vagrant/extensions')
$loadable_extensions = sz_extensions('/vagrant/extensions', 2)
$global_extensions = chassis_get_global_extensions()
$php_extensions = [ 'curl', 'gd', 'mysql' ]

if $global_extensions {
	class { $global_extensions:
		config => $config,
	}
}

if $loadable_extensions {
	class { $loadable_extensions:
		config => $config,
	}
}

include apt

class { 'chassis::php':
	extensions => $php_extensions,
	version => $config[php],
	require => [
		Class['apt'],
	],
}

package { 'git-core':
	ensure => installed
}

class { 'mysql::server':
	root_password => 'password',
}

class { 'chassis':
	require => Class['chassis::php'],
}

$subdomains = ( $config[multisite] == 'subdomains' )

class { 'chassis::hosts':
	aliases => $config[hosts],
	subdomains => $subdomains,
}

chassis::wp { $config['hosts'][0]:
	location          => $config[mapped_paths][base],
	wpdir             => $config[mapped_paths][wp],
	contentdir        => $config[mapped_paths][content],

	hosts             => $config[hosts],
	database          => $config[database][name],
	database_user     => $config[database][user],
	database_password => $config[database][password],
	database_prefix   => $config[database][prefix],
	network           => $config[multisite],
	admin_user        => $config[admin][user],
	admin_email       => $config[admin][email],
	admin_password    => $config[admin][password],
	sitename          => $config[site][name],

	extensions        => $extensions,
	global_extensions => $global_extensions,

	require => [
		Class['chassis::php'],
		Package['git-core'],
		Class['mysql::server'],
	]
}

chassis::content { $config['hosts'][0]:
	location => $config[mapped_paths][base],
	plugins  => $config[plugins],
	themes   => $config[themes],

	# These tasks will not run unless WP is installed.
	require  => Chassis::Wp[ $config['hosts'][0] ],
}
