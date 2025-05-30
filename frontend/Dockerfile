
FROM ghcr.io/cirruslabs/flutter:3.19.6 AS build-stage

WORKDIR /app
COPY . .

RUN flutter pub get
RUN flutter build web

# Usa una imagen pequeña de Nginx para servir la app
FROM nginx:alpine
COPY --from=build /app/build/web /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
