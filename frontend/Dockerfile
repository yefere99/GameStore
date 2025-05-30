FROM ghcr.io/flutter/flutter:3.22.0 AS build


WORKDIR /app
COPY . .
RUN flutter pub get
RUN flutter build web

# 2. Serve stage (usa NGINX)
FROM nginx:alpine

# Borra el contenido default
RUN rm -rf /usr/share/nginx/html/*

# Copia la app compilada de Flutter al directorio público de nginx
COPY --from=build /app/build/web /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
