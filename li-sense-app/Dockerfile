FROM node:16-alpine AS development
ENV NODE_ENV development

# Add a work directory
WORKDIR /app

# Cache and install dependencies
COPY package.json .
COPY yarn.lock .

# Copy app files
COPY . .

# === BUILD === #
RUN npm install husky --save-dev
RUN npm ci
RUN npm run build

# Expose port
EXPOSE 8080

# Start the app
CMD [ "npm", "start" ]
CMD [ "npm", "start", "--", "--port", "8080" ]