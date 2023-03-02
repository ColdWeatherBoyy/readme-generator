// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = `[![License]${renderLicenseBadge(license)}] ${renderLicenseLink(license)}`
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  const { projecttitle, description, installation, usage, contribution, credits, test, license } = answers;

  // const sectionLicense = renderLicenseSection(answers.license);
  const readmeTemplate =
  `# ${projecttitle}

  ${renderLicenseSection(license)}

  ## Description
  
  ${description}
  
  ## Table of Contents
  
  If your README is long, add a table of contents to make it easy for users to find what they need.
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${installation}
  
  ## Usage
  
  ${usage}
  
  ## Credits
  
  ${credits}
  
  ## License
  
  ${license}
  
  ## How to Contribute
  
  ${contribution}  

  ## Tests
  
  ${test}`;
  return readmeTemplate;
}




module.exports = generateMarkdown;
