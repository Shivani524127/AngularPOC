FROM angular/ngcontainer
COPY . /app/
WORKDIR /app
RUN npm install
CMD ["npm", "start"]