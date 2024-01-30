// // TODO: Include packages needed for this application

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your Project Title'
  },
  
  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your application'
  },

  {
    type: 'input',
    name: 'installation instructions',
    message: 'Instructions for Installation'
  },

  {
    type: 'input',
    name: 'usage information',
    message: 'Usage Information'
  },

  {
    type: 'input',
    name: 'contriution guidelines',
    message: 'Contribution Guidelines'
  },

  {
    type: 'input',
    name: 'contriution guidelines',
    message: 'Contribution Guidelines'
  },

  {
    type: 'input',
    name: 'test instructions',
    message: 'Test Instructions'
  },

  {
    type: 'checkbox',
    name: 'license',
    message: 'Select your license:',
    choices: ['Apache', 'MIT', 'Boost Software', 'Eclipse Public', 'No License',]
  },

  {
    type: 'input',
    name: 'username',
    message: 'GitHub Username'
  },

  {
    type: 'input',
    name: 'email',
    message: 'Email Address'
  },
];

inquirer.prompt(questions)
  .then(answers => {
    console.log('Answers:', answers);
  })
  .catch(error => {
    console.error('Error:', error);
  });