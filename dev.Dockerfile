FROM node:alpine 

WORKDIR /usr/share/app

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]