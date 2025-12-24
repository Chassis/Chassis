# Setup our network configuration
define chassis::network (
	$location,
	$contentdir,
	$upload_size,
	$memory_limit,
	$subdomains = false,
	$wpdir = 'wp',
	$hosts = [],
	$database = 'wordpress',
	$database_user = 'root',
	$database_password = 'password',
	$database_host = 'localhost',
	$database_charset,
	$database_collation,
	$admin_user     = 'admin',
	$admin_email    = 'admin@example.com',
	$admin_password = 'password',
) {
	$extra_hosts = join($hosts, ' ')
	if ( $subdomains ) {
		$server_name = rstrip(".${name} ${extra_hosts}")
	}
	else {
		$server_name = rstrip("${name} ${extra_hosts}")
	}
	file { $wpdir:
		ensure => directory
	}
	file { "/etc/nginx/sites-available/${name}":
		content => template('chassis/multisite.nginx.conf.erb'),
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
		user       => $database_user,
		password   => $database_password,
		host       => $database_host,
		charset    => $database_charset,
		collate    => $database_collation,
		grant      => ['all'],
	}

	wp::site { $wpdir:
		url            => "http://${name}/",
		name           => 'Vagrant Site',
		require        => Mysql::Db[$database],
		network        => true,
		subdomains     => $subdomains,
		admin_user     => $admin_user,
		admin_email    => $admin_email,
		admin_password => $admin_password,
	}
}
