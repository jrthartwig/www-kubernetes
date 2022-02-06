FROM node:alpine as build

WORKDIR /usr/share/app

COPY . .

RUN npm install 
RUN npm run build

FROM nginx:alpine as production

WORKDIR /usr/share/nginx/html 
COPY --from=build /usr/share/app/build .

EXPOSE 80