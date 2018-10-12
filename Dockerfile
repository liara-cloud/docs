FROM node:8.11

RUN npm i -g npm@6.4.1

COPY package.json package-lock.json /app/

WORKDIR /app

RUN npm ci

COPY . /app

RUN npm run build

CMD npm start

EXPOSE 3000