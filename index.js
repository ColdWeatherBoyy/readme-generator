// TODO: Include packages needed for this application
const { prompt } = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "projecttitle"
  },
  {
    type: "input",
    message: "Provide a detailed description of your project, please.",
    name: "description"
  },
  {
    type: "input",
    message: "Please provide installation instructions.",
    name: "installation"
  },
  {
    type: "input",
    message: "Provide usage information, please.",
    name: "usage"
  },
  {
    type: "input",
    message: "Any guidelines for contribution?",
    name: "contribution"
  },
  {
    type: "input",
    message: "Please list anyone who has contributed so far, and any other credits you want to include.",
    name: "credits"
  },
  {
    type: "input",
    message: "Provide test information, please, as well?",
    name: "test"
  },
  {
    type: "list",
    message: "Select the license you are using:",
    name: "license",
    choices: ["MIT", "Apache License 2.0", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "none"],
  },
  {
    type: "input",
    message: "What is your gitHub username?",
    name: "githubUsername"
  },
  {
    type: "input",
    message: "What is your gitHub link?",
    name: "githubLink"
  },
  {
    type: "input",
    message: "What is your email?",
    name: "emailAddress"
  },
  {
    type: "input",
    message: "What's the best way to reach you?",
    name: "howToReach"
  },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
  fs.writeFile(fileName, answers, "utf8", (err) => err ? console.log(err) : console.log('success!'))
}

// TODO: Create a function to initialize app
function init() {
  prompt(questions)
    .then((answers) => writeToFile("README.md", generateMarkdown(answers)))
}

// Function call to initialize app
init();
