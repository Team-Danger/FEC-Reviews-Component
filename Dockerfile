FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

EXPOSE 3002
CMD ["npm", "run", "server:prod"]