FROM node:11.14.0-alpine

WORKDIR /usr/app

COPY package.json .
RUN npm install --quiet

COPY . .
