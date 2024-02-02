// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license==="Apache"){
    return `![Static Badge](https://img.shields.io/badge/License-Apache2.0-brightgreen)
    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
  
  // use for MIT License ling
  // https://choosealicense.com/licenses/mit/


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license==="Apache"){
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  if(license==="MIT"){
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  if(license==="GNU General Public License"){
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  }
  if(license==="No License"){
    return `Repository Is Not Licensed`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}

# ${data.name}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License
  
${renderLicenseSection(data.license)}

## Contributing

${data.contributions}

## Tests

${data.tests}

## Questions


`;
}

module.exports = generateMarkdown;