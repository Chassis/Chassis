if [[ ! -f /etc/chassis-provisioned ]]; then
	echo "======================================"
	echo "Your Chassis box has been provisioned!"
	echo "======================================"
	echo
	echo "URL: http://$1/"
	echo "Username: $2"
	echo "Password: $3"

	touch /etc/chassis-provisioned
fi