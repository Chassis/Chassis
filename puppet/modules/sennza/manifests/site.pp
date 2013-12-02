define sennza::site (
	$location,
	$hosts = [],
	$database = 'wordpress',
	$database_user = 'root',
	$database_password = 'password',
	$database_host = 'localhost'
) {
	$extra_hosts = join($hosts, ' ')
	$server_name = rstrip("${name} ${extra_hosts}")
	file { $location:
		ensure => directory
	}
	file { "/etc/nginx/sites-available/$name":
		content => template('sennza/site.nginx.conf.erb'),
		notify => Service['nginx']
	}
	file { "/etc/nginx/sites-enabled/$name":
		ensure => link,
		target => "/etc/nginx/sites-available/$name",
		notify => Service['nginx']
	}

	mysql::db {$database:
		user     => $database_user,
		password => $database_password,
		host     => $database_host,
		grant    => ['all'],
	}

	wp::site {"${location}/wp":
		url => "http://${name}/",
		name => 'Vagrant Site',
		require => Mysql::Db[$database]
	}
}