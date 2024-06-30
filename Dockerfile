# Use a specific node image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Clear npm cache and install dependencies
RUN npm cache clean --force && \
	npm install

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
