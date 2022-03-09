FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY ./ ./

ENV APP_PORT 8080
EXPOSE 8080

CMD ["node", "app.js"]