# Getting Started
To run this project you will require [NodeJS](https://nodejs.org/).

 - Install the required dependencies:
    - `npm i`
 - Start the local webserver:
    - `npm start`

At this point your browser should have opened to http://localhost:3000. If not, try clicking the link. If the webserver is not able to start try changing the port in [webpack.config.js](./webpack.config.js).

Code entrypoint: [./src/index.ts](./src/index.ts)

# The program
At opening the web page you will be presented with a blue 800x600 canvas containing a grey button which says click me. When the button is clicked the canvas will change colour to yellow.

**The button is in a random position every time the page is launched.**

# The Task
Write a test case using an automated testing library of your choosing which is able to click on the button, turning the canvas from blue to yellow.

You may edit the code of the program but _may not_ edit the behaviour of the program presented to the end user.

****************************************************************************

# Cypress Tech Test
Cypress Report with GitHub Actions workflow and publish report in GitHub Pages

# Fork this repo
If you want to experiment with running this project in Continous Integration, you'll need to fork it first.

After forking this project in Github, run these commands:

## Clone this repo to a local directory
git clone  https://github.com/yash1731/pushgame_task

## Install the node_modules
npm install

## Launch the cypress test runner
npx cypress open

## Launch the cypress test chrome/headless mode
npx cypress run --browser chrome

npx cyprees run --headless

## Launch the cypress test & publish report in dashboard cypress.io
npx cypress run --record --key bbdb40db-0e89-4cdb-b580-3ac3dfe99e1c

# Follow this link to see report - 
https://dashboard.cypress.io/organizations/faa2b607-3728-45f2-bf0a-2e6e3171e26d/projects


# Run Cypress tests with GitHub Actions as part of CI/CD pipeline
GitHub offers developers Actions that provide a way to automate, customize, and execute your software development workflows within your GitHub repository.

How this action works: 

1. On push to this repository, this job will provision and start GitHub-hosted Ubuntu Linux instance for running the outlined steps for the declared cypress-run job within the jobs section of the configuration.
2. The GitHub checkout Action is used to checkout our code from our GitHub repository
3. Finally, our Cypress GitHub Action will:

Install npm dependencies
Build the project (npm run build)
Start the project web server (npm start)
Run the Cypress tests within our GitHub repository within Electron.

## Testing in Chrome and Firefox with Cypress Docker Images
GitHub Actions provides the option to specify a container image for the job. Cypress offers various Docker Images for running Cypress locally and in CI.

## Using the Cypress Dashboard with GitHub Actions

GitHub Actions configuration with Cypress Dashboard we can leverage three useful features - 

1. Recording test results with the record: true option to the Cypress Dashboard
2. In-depth and shareable test reports.
3. Visibility into test failures via quick access to error messages, stack traces, screenshots, videos, and contextual details.

## Links to see GitHub Actions pages build deployment test report

https://yash1731.github.io/pushgame_task/

