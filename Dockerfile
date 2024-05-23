FROM node:lts-buster AS react-app

WORKDIR /usr/src/app

COPY package.json package-lock.json /app

RUN npm ci

COPY . /app

ENV PORT=8080
EXPOSE $PORT

CMD ["npm", "run", "dev"]