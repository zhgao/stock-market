#!/bin/bash
docker-compose --compatibility down
docker rmi springcloud-zuul-service
mvn clean package -P docker
docker build -t springcloud-zuul-service .
docker-compose --compatibility up -d