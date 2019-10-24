# insurance-automation-test
Insurance form submission automation

## Description
This is a sample automation framework for Insurance site with one end to end test for insurance form submission. 
It is build using Puppeteer. Chai is used for assertions. 
Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

## About the project
Puppeteer and chai dependencies are added in package.json
There are two more json files, config.json - which has url and credential details and formData.json - which has data used in form submission.
The end to end test is in test.js file
Page folder contains js files with page specific operations (POM)
consoleLogger is a custom log generation file for indicating progress of the test
The test.js has assertions at each stage of form submission
Also screenshot is taken at each stage and is available for viewing in screenshot folder


## Prerequisites:
Node, Git

## To run the test
1. Clone project run : https://github.com/shamelgour/insurance-automation-test.git
2. Go to folder "insurance-automation-test" through terminal.
3. run: npm install (This might take some time as it will install puppeteer , Chromium and Chai)
4. run: node test.js


