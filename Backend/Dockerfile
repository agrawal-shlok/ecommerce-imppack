FROM node:23-alpine3.20

RUN apk add --update npm

WORKDIR /backend

COPY . .

RUN rm -rf node_modules && npm i && npm i nodemon -g

CMD nodemon server
