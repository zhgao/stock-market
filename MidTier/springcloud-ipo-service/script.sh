#!/bin/bash
docker-compose --compatibility down
docker rmi springcloud-ipo-service
mvn clean package -P docker
docker build -t springcloud-ipo-service .
docker-compose --compatibility up -d