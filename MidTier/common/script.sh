#!/bin/bash
docker-compose --compatibility down
docker rmi common
mvn clean package -P docker
docker build -t common .
docker-compose --compatibility up -d