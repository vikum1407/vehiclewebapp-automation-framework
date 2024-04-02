# Playwright Automation Framework Setup on Kubernetes Distributed Environment with Docker

This project repository contains code to demonstrate JavaScript Playwright 🎭, Docker 🐋, and Kubernetes.

The project uses the Page Object Model (POM) design pattern to develop a Playwright web application automation framework and expands the framework with Docker and Kubernetes to test in a distributed environment approach.

## Version Checklist:
  * Docker version 24.0.6, build ed223bc
  * Playwright ^1.42.1
  * Types/Node ^20.11.30
  * Allure-commandline ^2.27.0
  * Allure-playwright 2.15.0

## Main Features:

1. Playwright UI automation framework including visual comparisons
2. Dockerfile to create an image
3. Playwright Allure reports
4. Kubernetes distributed environment setup

## Product Domain Initialization

* Node.js Installation - [Download Node.js](https://nodejs.org/en/download)
* Playwright Installation - [Playwright Documentation](https://playwright.dev/docs/intro)
* Install Allure report module through the playwright.config.js file:

```bash
"allure-playwright": "2.15.0"
```
- Run on command line
```bash
npm install -D allure-commandline
npx allure generate ./allure-results --clean
```
- To open Allure HTML report
```bash
npx allure open ./allure-report/
```

## Run the Tests with Playwright

```bash
npx playwright test
```

## Run the Tests on Docker

```bash
docker build -t <image_name:tag>
```

## Run All Tests without Parallelism

```bash
docker run -p 55653:55653 <image_name>
```

## Running All Tests with Parallelism

```bash
kubectl apply -f playwright-service.yaml
```

* According to the testing requirements, you can scale the pod count using the command line as follows:

```bash
kubectl scale deployment playwright-deployment --replicas=5
```

## Performance Testing on the Web Application

  * If you want to do performance testing on the web application, here is the solution to integrate an automated JMeter distributed framework into your CI/CD pipeline: [Automated JMeter Distributed Framework](https://github.com/vikum1407/jmeter-kubernetes-distributed)



The README file has been updated with improved grammar and additional information.
![Logo](https://github.com/vikum1407/vehiclewebapp-automation-framework/blob/master/playwright-auto-framework.PNG)
