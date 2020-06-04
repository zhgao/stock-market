#!/bin/bash
docker-compose --compatibility down
docker rmi springcloud-user-service
mvn clean package -P docker
docker build -t springcloud-user-service .
docker-compose --compatibility up -d