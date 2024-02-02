// variables to allow frameworks
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/generateMarkdown');
const fs = require ('fs');

// variable to store answers for document
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
    name: 'installation',
    message: 'Instructions for Installation'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'Usage Information'
  },

  {
    type: 'input',
    name: 'contributions',
    message: 'Contribution Guidelines'
  },

  {
    type: 'input',
    name: 'tests',
    message: 'Test Instructions'
  },

  {
    type: 'list',
    name: 'license',
    message: 'Select your license:',
    choices: ['Apache', 'MIT', 'GNU General Public License', 'No License']
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

// function to initiate app and apply answers to generateMarkdown
async function createFile() {

  inquirer.prompt(questions)
  .then(answers => {
    console.log('Answers:', answers);
    fs.writeFile("generatedReadME.md",generateMarkdown(answers),error => {
      if(error) throw (error);
      console.log('succesfully generated markdown');
    })
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// call to run function
createFile()