FROM node:14

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y git
RUN git clone https://github.com/vikum1407/vehiclewebapp-automation-framework.git .
RUN npm install

# Expose necessary ports 

# Run your Playwright tests
CMD ["npm", "test"]
