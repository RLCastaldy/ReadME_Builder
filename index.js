const inquirer = require('inquirer');
const axios = require('axios');

let owner, repo, authorization, filePath, fileContent;

inquirer
  .prompt([
    
    {
        type: 'input',
        name: 'owner',
        message: 'Enter your GitHub Username',
    },

    {
        type: 'input',
        name: 'repo',
        message: 'Enter the Name of Your Repo',
    },

    {
        type: 'input',
        name: 'authorization',
        message: 'Enter your GitHub Access Token',
      },
    
    {
      type: 'input',
      name: 'filePath',
      message: 'Enter the file path (e.g., path/to/file.txt):',
    },
    {
      type: 'input',
      name: 'fileContent',
      message: 'Enter the file content:',
    },
  ])
  .then((answers) => {
    owner= answers.owner;
    repo= answers.repo;
    authorization= answers.authorization;
    filePath = answers.filePath;
    fileContent = answers.fileContent;

    createFile();
  });



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

async function createFile() {
    try {
      const response = await axios.put(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`, {
        message: 'Create file',
        content: Buffer.from(fileContent).toString('base64')
      }, {
        headers: {
          Authorization: `${authorization}`
        }
      });
  
      console.log('File created successfully:', response.data);
    } catch (error) {
      console.error('Error creating file:', error.response.data);
    }
  inquirer.prompt(questions)
  .then(answers => {
    console.log('Answers:', answers);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}