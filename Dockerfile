FROM node:12.2.0
COPY . /app/
WORKDIR /app
RUN npm install
CMD ["npm", "start"]