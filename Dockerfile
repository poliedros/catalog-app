FROM node:16.13.0-stretch-slim as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21
COPY --from=builder /app/build/ /usr/share/nginx/html
