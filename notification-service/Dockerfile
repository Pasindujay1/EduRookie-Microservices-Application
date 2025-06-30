# Use a lightweight Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the application source code
COPY . .

# Set the environment to production
ENV NODE_ENV=production

# Expose the port
EXPOSE 8005

# Command to run the application
CMD ["node", "app.js"]