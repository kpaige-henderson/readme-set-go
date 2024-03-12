// function that returns a license badge, link, and section based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadgeLinkSection(license) {
  if (license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Mozilla 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'Boost 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
  } else if (license === "None") {
    return '';
  }
}

// function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
// if (license !== 'None') {
// return '*[License](#license)';
// } else {
// return '';


// function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {
//if (license === 'None') {
//   return '';


//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadgeLinkSection(data.license)}


  ## Desciption
  ${data.description}

  ## Table Of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Test](#test)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Test
  ${data.test}

  ## Questions
  GitHub: ${data.username} ${data.link}

  ${data.contact} ${data.email}`;
}

module.exports = generateMarkdown;
