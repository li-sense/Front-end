# CONFIGURE
FROM node:16-alpine
WORKDIR /app
COPY . .

# BUILD
RUN npm install husky --save-dev
RUN npm install react-google-login
RUN npm install gapi-script
RUN npm install
RUN npm run build


EXPOSE 9000


WORKDIR /li-sense-app
RUN npm install --force
RUN npm start -- --port 8080


EXPOSE 8080
# RUN
CMD [ "npm", "start" ]