### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:10-alpine as builder
COPY . /app
WORKDIR /app
RUN npm install
## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run  build
# -- --output-path=dist

### STAGE 2: Setup ###
FROM nginx:1.14.1-alpine
## Copy our default nginx config
COPY nginx/default.conf /etc/nginx/conf.d/
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /app/dist/* /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
