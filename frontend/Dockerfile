
FROM ghcr.io/cirruslabs/flutter:3.19.6 AS build-stage

WORKDIR /app
COPY . .

RUN flutter pub get
RUN flutter build web --release

# Etapa de producción
FROM nginx:stable-alpine
COPY --from=build-stage /app/build/web /usr/share/nginx/html
