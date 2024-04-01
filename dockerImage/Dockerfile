FROM node:14

WORKDIR /usr/src/app

# Install git to clone the repository
RUN apt-get update && apt-get install -y git

# Clone your GitHub repository
RUN git clone https://github.com/vikum1407/vehiclewebapp-automation-framework.git .

# Install dependencies
RUN npm install

# Expose any necessary ports for your application
# For Playwright tests, you may not need to expose any ports

# Run your Playwright tests when the Docker container starts
CMD ["npm", "test"]
