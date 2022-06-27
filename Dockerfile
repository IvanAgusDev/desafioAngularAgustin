FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

RUN mkdir -p /app

COPY package.json /app

#parte 2

FROM nginx:alpine

COPY --from=node /app/dist/DesafioAngularAgustin /usr/share/nginx/html

