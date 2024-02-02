//function to apply license badges
function renderLicenseBadge(license) {
  if(license==="Apache"){
    return `![Static Badge](https://img.shields.io/badge/License-Apache2.0-brightgreen)`
  }

  if(license==="MIT"){
    return `![Static Badge](https://img.shields.io/badge/License-MIT%203.0-black)`
  }

  if(license==="GNU General Public License"){
    return `![Static Badge](https://img.shields.io/badge/License-GNU%203.0-blue)`
  }

  if(license==="No License"){
    return ""
  }
}

// function to apply license link
function renderLicenseLink(license) {
  if(license==="Apache"){
    return `http://www.apache.org/licenses/`
  }

  if(license==="MIT"){
    return `https://choosealicense.com/licenses/mit/`
  }

  if(license==="GNU General Public License"){
    return `https://fsf.org/`
  }

  if(license==="No License"){
    return ""
  }
}

// function to apply license description
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

// function to print text on ReadME
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
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License
  
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributing

${data.contributions}

## Tests

${data.tests}

## Questions

<br>
GitHub Profile:
<br>
github.com/${data.username}
<br>
<br>
I am happy to answer any questions via email.
<br>
Email: ${data.email}

`;
}

module.exports = generateMarkdown;