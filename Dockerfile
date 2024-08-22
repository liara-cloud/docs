# 1) Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json /app/

RUN npm ci

COPY . /app/

RUN npm run build

# 2) Run
FROM nginx:1.27.0

COPY liara_nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/out /usr/share/nginx/html
