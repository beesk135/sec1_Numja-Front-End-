FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install --save-dev fork-ts-checker-webpack-plugin
RUN npm install
COPY ./ .
RUN yarn serve

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf