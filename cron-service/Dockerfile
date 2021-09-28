FROM node:14.16.1-alpine3.13
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn install --production --pure-lockfile --silent
COPY main.js .
CMD node main.js