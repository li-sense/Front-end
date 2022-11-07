# === CONFIGURE === #
FROM node:16-alpine
WORKDIR /app
COPY . .

# === BUILD === #
RUN npm install husky --save-dev
RUN npm ci
RUN npm run build

# === RUN === #
ENV NODE_ENV homologation
EXPOSE 3000
CMD [ "npx", "serve", "build" ]