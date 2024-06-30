# Use a specific node image
FROM node:18

# Set a non-root user
USER node

# Set the working directory
WORKDIR /app

# Install dependencies
RUN npm install vite@0.20.2

# Copy package files
COPY package.json ./
COPY package-lock.json ./

# Install npm packages
RUN npm install

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 8080

# Healthcheck instruction
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl -f http://localhost:8080 || exit 1

# Command to run the application
CMD [ "npm", "run", "dev" ]
