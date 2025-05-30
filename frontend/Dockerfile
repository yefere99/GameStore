FROM dart:stable AS build

# Instala git y otras dependencias
RUN apt-get update && apt-get install -y git curl unzip xz-utils

# Descarga Flutter estable
RUN git clone https://github.com/flutter/flutter.git /flutter
ENV PATH="/flutter/bin:/flutter/bin/cache/dart-sdk/bin:${PATH}"

# Acepta las licencias (evita fallos de doctor)
RUN flutter doctor -v

WORKDIR /app
COPY . .

RUN flutter pub get

RUN flutter build web --release --dart-define=apiUrl=$apiUrl

# Usa nginx para servir la app
FROM nginx:alpine
COPY --from=build /app/build/web /usr/share/nginx/html
EXPOSE 80
