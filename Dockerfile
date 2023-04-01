FROM node:18.15-alpine
WORKDIR /app
COPY ./package*.json ./
RUN npm ci && mv ./node_modules /
