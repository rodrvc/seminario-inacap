# Use the official image as a parent image.
# - FROM node:13

# Set the working directory.
# - WORKDIR /app



# Copy the file from your host to your current location.
# - COPY package*.json ./

# Run the command inside your image filesystem.
# - RUN npm install


# Inform Docker that the container is listening on the specified port at runtime.


# - COPY . .
# - EXPOSE 5000 5000
 
# Run the specified command within the container.
# - CMD [ "npm", "start" ]

# Copy the rest of your app's source code from your host to your image filesystem.



 
FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

COPY wait-for.sh ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 8080

CMD [ "npm", "app.js" ]