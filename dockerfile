FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Build server / client bundles with webpack
RUN npm run build
# Install PM2 Globally
RUN npm install pm2 -g

WORKDIR /usr/src/app/dist

EXPOSE 3000

CMD ["pm2-runtime", "server.bundle.js"]