// Require statements for inquirer, fs, as well as my second JS module
const { prompt } = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')

// An array of questions needed for inquirer
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

// This function takes two arguments – the name of the file to be created and the data to use to make the file
function writeToFile(fileName, answers) {
  // utilizing the fs method writeFile to create a file given parameters above
  fs.writeFile(fileName, answers, "utf8", (err) => err ? console.log(err) : console.log('success!'))
}

// Initialization function declaration which uses inquirer to prompt and its .then method to take its answers as an argument for writeToFile above.
function init() {
  prompt(questions)
  // generateMarkdown is defined in a separate JS file, required at the top of the page, and is used to generate the content needed for writeToFile to work
    .then((answers) => writeToFile("README_Created.md", generateMarkdown(answers)))
}

// Function call to initialize app
init();
