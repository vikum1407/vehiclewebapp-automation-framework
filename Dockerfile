FROM mcr.microsoft.com/playwright:v1.42.1-jammy

WORKDIR /app

COPY pages /app/pages
COPY tests /app/tests
COPY conf /app/conf
COPY util /app/util

# Install dependencies
COPY package.json package-lock.json /app/
RUN npm install

EXPOSE 55653

# Run your Playwright tests
CMD ["npm", "test"]
