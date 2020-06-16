#!/bin/bash
docker-compose --compatibility down
docker rmi stockwebapp
mvn clean package -P docker
docker build -t stockwebapp .
docker-compose --compatibility up -d