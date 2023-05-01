FROM node:18.16.0-bullseye
WORKDIR /app
COPY ./package*.json ./
RUN npm ci && mv ./node_modules /
