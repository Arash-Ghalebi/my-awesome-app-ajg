FROM node:10
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
ENV APP_PORT 8080
EXPOSE 8080
CMD [ "node", "App.js" ]