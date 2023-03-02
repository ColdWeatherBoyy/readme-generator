// function that does an if/else to check which type of license was selected and generate the link to its relevant image 
function renderLicenseBadge(license) {
  let badgeLinkParam = '';
  if (license === "MIT") {
    badgeLinkParam = 'MIT-yellow.svg'
  } else if (license === 'Apache License 2.0') {
    badgeLinkParam = 'Apache_2.0-blue.svg'
  } else if (license === 'GNU AGPLv3') {
    badgeLinkParam = 'AGPL_v3-blue.svg'
  } else if (license === 'GNU GPLv3') {
    badgeLinkParam = 'GPLv3-blue.svg'
  } else if (license === 'GNU LGPLv3') {
    badgeLinkParam = 'LGPL_v3-blue.svg'
  } else if (license === 'Mozilla Public License 2.0') {
    badgeLinkParam = 'MPL_2.0-brightgreen.svg'
  } else if (license === 'none') {
    return "";
  }
  return `(https://img.shields.io/badge/License-${badgeLinkParam})`;
}

// Similar as above, function to check which license was selected to provide the relevant link to its resources
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (license === 'Apache License 2.0') {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'GNU AGPLv3') {
    return `(https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license === 'GNU GPLv3') {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === 'GNU LGPLv3') {
    return `(https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license === 'Mozilla Public License 2.0') {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'none') {
    return "";
  }
}

// combination of above two functions for markdown link syntax
function renderLicenseSection(license) {
  const licenseSection = `[![License]${renderLicenseBadge(license)}]${renderLicenseLink(license)}`
  return licenseSection;
}

// function that defines the text needed in the readme file being created
function generateMarkdown(answers) {
  // destructuring of the answers from the inquirer function for easier access
  const { projecttitle, description, installation, usage, contribution, credits, test, license, githubLink, githubUsername, emailAddress, howToReach } = answers;

  // variable defined by the text of the future ReadMe File using destructured variables to fill in content as needed. Can't comment within due to template literals – but also includes call to the function that creates the License badge section
  const readmeTemplate =
  `# ${projecttitle}

  ${renderLicenseSection(license)}

  ## Description
  
  ${description}
  
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How To Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Credits
  
  ${credits}
  
  ## License
  
  This application is covered under the following license: ${license}
  
  ## How to Contribute
  
  ${contribution}  

  ## Tests
  
  ${test}
  
  ## Questions
  
  You can view my gitHub here: [${githubUsername}](${githubLink})

  This is my email: ${emailAddress}

  But this is how it's best to reach me: ${howToReach}
  `
  ;
  // return statement so that this function returns the text needed in the writeFile function in our other JS page
  return readmeTemplate;
}



// export of generateMarkdown to allow access in other JS module.
module.exports = generateMarkdown;
