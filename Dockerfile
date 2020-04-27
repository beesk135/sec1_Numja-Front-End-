FROM node:13-alpine
WORKDIR /app
# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@3.7.0 -g
COPY ./ .
EXPOSE 8080
CMD ["yarn", "serve"]# base image


