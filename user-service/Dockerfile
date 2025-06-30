# Stage 1: Install dependencies
FROM node:23-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the application source code
COPY . .

# Stage 2: Create a lightweight runtime image
FROM node:23-alpine AS runtime

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app /app

# Set the environment to production
ENV NODE_ENV=production

# Expose the port
EXPOSE 8002

# Create a non-root user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

# Command to run the application
CMD ["node", "app.js"]