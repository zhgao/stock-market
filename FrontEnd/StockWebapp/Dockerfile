FROM java:8

RUN echo "Asia/Shanghai" > /etc/timezone && mkdir /app

COPY target/stockwebapp.war /app/stockwebapp.war

WORKDIR /app

EXPOSE 8080

CMD ["java", "-jar", "stockwebapp.war"]