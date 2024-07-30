// Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './utils/generateMarkdown.js';

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use this project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv2', 'Apache', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    const dir = path.resolve('./new-README');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    const filePath = path.join(dir, fileName);
    fs.writeFile(filePath, data, (err) =>
      err ? console.log(err) : console.log('Your README.md has been created and sent to the new-README directory!')
    );
  }
  
// Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    const markdownContent = generateMarkdown(responses);
    writeToFile('README.md', markdownContent);
  });
}

// Function call to initialize app
init();

