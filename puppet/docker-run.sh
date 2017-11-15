#!/bin/bash

ID="$(docker run \
	-p 80 \
	-d \
	--rm \
	--mount type=bind,source="$PWD",target=/chassis \
	chassis)"
SUCCESS=$?

if [ ! $SUCCESS -eq 0 ]; then
	echo "Unable to run container"
	exit
fi

NAME=$(docker inspect --format='{{.Name}}' $ID | sed s#/##)
URL="$(docker port $ID 80 | sed s/0.0.0.0/localhost/)"

echo "======================================"
echo "Your Chassis Container is now running!"
echo "======================================"
echo
echo "URL: http://$URL/"
echo "Username: admin"
echo "Password: password"
echo
echo "Container: $NAME"
echo "[$ID]"
