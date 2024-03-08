// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'APACHE 2.0') {
    return '![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
  } else if (license === 'MIT') {
    return '![MIT license badge] (https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (license === 'GPLv3') {
    return '![GPL3 license badge] (https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (license === 'Modzilla 2.0') {
    return '![Modzilla 2.0 license badge] (https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
  } else if (license === 'Boost 1.0') {
    return '![Boost 1.0 license badge] (https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
  } else if (license === "None") {
    return '';
  }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '*[License](#license)';
  } else {
    return '';
  }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Desciption
  ${data.desciption}

  ## Table Of Contents
  *[Installation](#installation)
  *[Usage](*usage)
  *[Contributing](#credits)
  *[Test](*test)
  *[Questions](*questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.credits}

  ## Test
  ${data.test}

  ## Questions
  GitHub: ${data.username} ${data.link}

  ${data.email} ${data.contact}`;
}

module.exports = generateMarkdown;
