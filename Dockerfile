FROM node:18.17.0-bullseye
WORKDIR /app
COPY ./package*.json ./
RUN npm ci

# Japanese
RUN apt-get update \
    && apt-get install -y locales \
    && locale-gen ja_JP.UTF-8
ENV LANG ja_JP.UTF-8
ENV LANGUAGE ja_JP:ja
ENV LC_ALL ja_JP.UTF-8
RUN localedef -f UTF-8 -i ja_JP ja_JP.utf8