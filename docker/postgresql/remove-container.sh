#!/bin/sh

COLOR_LIGHT_GREEN='\033[1;32m'
COLOR_OFF='\033[0m'

CONTAINER_NAME='taskr_db'
IMAGE_NAME='taskr/postgresql'

printf "\n${COLOR_LIGHT_GREEN}=====> Stopping the '$CONTAINER_NAME' Docker container...${COLOR_OFF}\n"

docker stop $CONTAINER_NAME


printf "\n${COLOR_LIGHT_GREEN}=====> Removing the '$CONTAINER_NAME' Docker container...${COLOR_OFF}\n"

docker rm $CONTAINER_NAME

printf "\n${COLOR_LIGHT_GREEN}=====> Docker container '$CONTAINER_NAME' removed!${COLOR_OFF}\n"
