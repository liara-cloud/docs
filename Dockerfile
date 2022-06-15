# 1) Build
FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json /app

RUN npm ci

COPY . /app

RUN npm run build

# 2) Run
FROM liararepo/static-platform:base

COPY liara_nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/out /usr/share/nginx/html
