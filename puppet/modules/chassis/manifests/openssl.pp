define chassis::openssl (
) {
	file { '/vagrant/certs':
		ensure => 'directory',
	}

	# include ::openssl

	# class { '::openssl':
	  # package_ensure         => latest,
	  # ca_certificates_ensure => latest,
	# }
	
	$commonname = "*.${fqdn}"

	openssl::certificate::x509 { $fqdn:
	  country      => 'HM',
	  organization => $fqdn,
	  commonname   => $commonname,
	} ->
	file { "/vagrant/certs/${fqdn}.crt":
		ensure => 'present',
		source => "/etc/ssl/certs/${fqdn}.crt",
		mode => '0644',
	}

	include ::openssl-nginx
}
