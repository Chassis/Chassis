# Configure defaults for various resources.
Service {
	provider => runit,
	path => '/etc/service',
}

# Configure Services
#
# Because we use runit instead of systemd, we need to configure services
# manually. Ideally, we would just use the init.d scripts instead...

file { [
	'/etc/service/mysql',
	'/etc/service/nginx',
	'/etc/service/php7.0-fpm',
	'/run/php',
]:
	ensure => directory,
}

# Dependency chains, to ensure service dirs aren't created early
Package['nginx'] -> File['/etc/service/nginx'] -> File['/etc/service/nginx/run'] -> Service['nginx']
Package['mysql-server'] -> File['/etc/service/mysql'] -> File['/etc/service/mysql/run'] -> Service['mysqld']
Package['php7.0-fpm'] -> File['/etc/service/php7.0-fpm'] -> File['/etc/service/php7.0-fpm/run'] -> Service['php7.0-fpm']

file { '/var/run/mysqld':
	ensure  => directory,
	owner   => 'mysql',
	group   => 'mysql',
	require => Package['mysql-server'],
	before  => File['/etc/service/mysql/run'],
}

file { '/etc/service/php7.0-fpm/run':
	ensure  => file,
	content => "#!/bin/bash\nexec /usr/sbin/php-fpm7.0 --nodaemonize --fpm-config /etc/php/7.0/fpm/php-fpm.conf -g /run/php7.0-fpm.pid",
	mode    => 0755,
}

file { '/etc/service/nginx/run':
	ensure  => file,
	content => "#!/bin/bash\nexec /usr/sbin/nginx -c /etc/nginx/nginx.conf -g 'daemon off;'",
	mode    => 0755,
}

file { '/etc/service/mysql/run':
	ensure => file,
	content => "#!/bin/sh -e\n\
cd /\n\
umask 077\n\
MYSQLADMIN='/usr/bin/mysqladmin --defaults-extra-file=/etc/mysql/debian.cnf'\n\
trap \"\$MYSQLADMIN shutdown\" 0\n\
trap 'exit 2' 1 2 3 15\n\
exec 2>&1\n\
mysqld_safe & wait",
	mode => 0755,
}

file { '/etc/service/sshd/down':
	ensure => absent,
}

# Now, load the actual provisioning.
$config = sz_load_config()

class { 'apt': }

class { 'chassis::php':
	extensions => [ 'curl', 'gd', 'mysql' ],
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
	service_provider => 'runit',
}

class { 'chassis':
	require => Class['chassis::php'],
}

$subdomains = ( $config[multisite] == 'subdomains' )

chassis::wp { 'localhost':
	location          => '/chassis',
	wpdir             => '/chassis/wp',
	contentdir        => '/chassis/content',

	hosts             => [],
	database          => $config[database][name],
	database_user     => $config[database][user],
	database_password => $config[database][password],
	database_prefix   => $config[database][prefix],
	network           => $config[multisite],
	admin_user        => $config[admin][user],
	admin_email       => $config[admin][email],
	admin_password    => $config[admin][password],
	plugins           => $config[plugins],
	themes            => $config[themes],

	extensions        => [],

	require  => [
		Class['chassis::php'],
		Package['git-core'],
		Class['mysql::server'],
	]
}

