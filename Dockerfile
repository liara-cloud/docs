# 1) Build
FROM node:18-alpine AS builder

ARG MY_BASE_URL
ARG MY_API_KEY

ENV MY_BASE_URL=$MY_BASE_URL
ENV MY_API_KEY=$MY_API_KEY

WORKDIR /app

RUN apk add --no-cache git

COPY package*.json /app/

RUN npm ci

COPY . /app/

RUN npm run build

# 2) Run
FROM registry2.iran.liara.ir/platforms/static-platform:base

COPY liara_nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/out /usr/share/nginx/html
