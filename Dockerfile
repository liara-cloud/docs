# 1) Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . /app/

RUN npm run build

# 2) Run
FROM registry2.iran.liara.ir/platforms/static-platform:base

COPY liara_nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/out /usr/share/nginx/html
