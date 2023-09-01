#!/usr/bin/env bash

TARGET='main'

ACTION_COLOR='\033[1;90m'
NO_COLOR='\033[0m'

echo -e ${ACTION_COLOR} Checking if we are on the target branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$BRANCH" != ${TARGET} ]
then
	exit 0
fi

# Checking if the repository is up to date.

git fetch
HEAD_HASH=$(git rev-parse HEAD)
UPSTREAM_HASH=$(git rev-parse ${TARGET}@{upstream})

if [ "$HEAD_HASH" == "$UPSTREAM_HASH" ]
then
	echo -e "${FINISHED}"The current branch is up to date with origin/${TARGET}."${NO_COLOR}"
fi

if [ $( docker ps -a | grep denison_social_api | wc -l ) -gt 0 ] && [ $( docker ps -a | grep denison_social_db | wc -l ) -gt 0 ] && [ $( docker ps -a | grep denison_social_web | wc -l ) -gt 0 ] && [ $( docker ps -a | grep denison-social_redis_1 | wc -l ) -gt 0 ] ; then
  	echo "all resources exists"
else
	echo "missing resources"
	echo “Running docker-compose again”
	docker-compose up -d --build
	echo -e "Succesfully run docker-compose"
fi

# If there are new changes, we pull these changes.
if [ "$HEAD_HASH" == "$UPSTREAM_HASH" ]
then
	  git pull origin main;
	  # We can now build and start the containers
	  echo -e "Succesfully pull new changes"
	  docker-compose up -d --build
	  echo -e "Succesfully run docker-compose"
fi

docker container ls

exit 0;