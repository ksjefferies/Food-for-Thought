FROM node:18.8.0-slim
ENV NODE_ENV=production

RUN mkdir /app
WORKDIR /app

COPY . .

RUN cd ./client && npm install --production && npm run build

RUN cd ./server && npm install --production 


ENTRYPOINT [ "node", "./server/server.js" ]