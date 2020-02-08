# 1) Build
FROM node:12-alpine AS builder

WORKDIR /app

COPY . /app

RUN npm ci && npm run build


# 2) Run
FROM liararepo/static-platform:base

COPY liara_nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/out /usr/share/nginx/html
