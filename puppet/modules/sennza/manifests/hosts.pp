class sennza::hosts {
	package { [ 'avahi-daemon', 'python-avahi', 'python-pip' ]:
		ensure => latest,
	}
}
