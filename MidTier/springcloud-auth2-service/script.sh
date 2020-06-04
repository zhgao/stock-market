#!/bin/bash
docker-compose --compatibility down
docker rmi springcloud-auth2-service
mvn clean package -P docker
docker build -t springcloud-auth2-service .
docker-compose --compatibility up -d