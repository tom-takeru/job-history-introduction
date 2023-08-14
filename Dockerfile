FROM node:18.17.0-bullseye
WORKDIR /app
COPY ./package*.json ./
RUN npm ci && mv ./node_modules /
