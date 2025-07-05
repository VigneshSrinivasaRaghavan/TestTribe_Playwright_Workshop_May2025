# Use the official Playwright base image
FROM mcr.microsoft.com/playwright:v1.53.0-noble

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install Node dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Set JAVA_HOME environment variable
ENV JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64

# Install Playwright browsers
RUN npx playwright install

# Command to run tests with environment variables loaded
CMD ["/bin/bash", "-c", "source /etc/environment && npm run test:docker"]
