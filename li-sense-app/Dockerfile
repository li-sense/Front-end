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

EXPOSE 8080
# RUN
CMD [ "npm","run","start:standalone"]