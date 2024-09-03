# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json, package-lock.json, and Prisma schema
COPY package*.json ./
COPY prisma ./prisma/
# COPY tsconfig.json ./
#COPY next.config.mjs ./ 


# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
#RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]
