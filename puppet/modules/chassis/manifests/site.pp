# Setup Nginx, MySQL and WordPress.
define chassis::site (
	$location,
	$wpdir,
	$contentdir,
	$hosts = [],
	$database = 'wordpress',
	$database_user = 'root',
	$database_password = 'password',
	$database_host = 'localhost',
	$admin_user     = 'admin',
	$admin_email    = 'admin@example.com',
	$admin_password = 'password',
	$sitename       = 'Chassis Site',
) {
	$extra_hosts = join($hosts, ' ')
	$server_name = rstrip("${name} ${extra_hosts}")
	file { $wpdir:
		ensure => directory
	}
	file { "/etc/nginx/sites-available/${name}":
		content => template('chassis/site.nginx.conf.erb'),
		notify  => Service['nginx']
	}
	if ( ! defined( File["/etc/nginx/sites-available/${name}.d"] ) ) {
		file { "/etc/nginx/sites-available/${name}.d":
			ensure  => directory,
			require => Package['nginx']
		}
	}
	file { "/etc/nginx/sites-enabled/${name}":
		ensure => link,
		target => "/etc/nginx/sites-available/${name}",
		notify => Service['nginx']
	}

	mysql::db {$database:
		user     => $database_user,
		password => $database_password,
		host     => $database_host,
		grant    => ['all'],
	}

	wp::site { $wpdir:
		url            => "http://${name}/",
		sitename       => $sitename,
		require        => Mysql::Db[$database],
		admin_user     => $admin_user,
		admin_email    => $admin_email,
		admin_password => $admin_password,
	}
}
