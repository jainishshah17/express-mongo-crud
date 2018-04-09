FROM node:6

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ENV DATABASE_URL 'mongodb://localhost:27017/test'
# Bundle app source
COPY . /usr/src/app

# Install app dependencies
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]