FROM node:10

COPY package.json package-lock.json /app/

WORKDIR /app

RUN npm ci

COPY . /app

RUN npm run build

CMD npm start

EXPOSE 3000