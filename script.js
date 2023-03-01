// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "projectitle"
  },
  {
    type: "input",
    message: "Provide a detailed description of your project, please",
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
    message: "Select the license you are using",
    name: "license",
    choices: ["MIT", "Apache License 2.0", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0"]
  }
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
