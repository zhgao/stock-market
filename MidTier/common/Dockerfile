FROM java:8

RUN echo "Asia/Shanghai" > /etc/timezone && mkdir /app

COPY target/common.jar /app/app.jar

WORKDIR /app

EXPOSE 8083

CMD ["java", "-jar", "app.jar"]