FROM node:14-alpine AS builder
WORKDIR /app
RUN apk add python3
RUN apk add g++ make python
COPY package* ./
RUN npm ci
COPY . ./
RUN npm update caniuse-lite browserslist
RUN npm run build

FROM nginx:alpine
#!/bin/sh
COPY ./nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stahg 1
COPY --from=builder /app/build /usr/share/nginx/html
