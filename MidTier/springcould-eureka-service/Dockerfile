FROM java:8

RUN echo "Asia/Shanghai" > /etc/timezone && mkdir /app

COPY target/springcloud-eureka-service.jar /app/app.jar

WORKDIR /app

EXPOSE 8087

CMD ["java", "-jar", "app.jar"]