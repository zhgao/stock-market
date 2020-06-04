#!/bin/bash
docker-compose --compatibility down
docker rmi springcloud-eureka-service
mvn clean package -P docker
docker build -t springcloud-eureka-service .
docker-compose --compatibility up -d