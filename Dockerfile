FROM node:19-alpine

COPY server/package.json /app/
COPY server/server.js /app/

WORKDIR /app

RUN npm install

CMD [ "node", "server.js" ]
