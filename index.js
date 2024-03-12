// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// questions for user input
const questions = [
    {
        type: 'input',
        message: "Your Project Title",
        name: 'title',
    },
    {
        type: 'input',
        message: "Provide a short description explaining your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "What are the step-by-step instructions your project requires for installation?",
        name: 'installation',
    },
    {
        type: 'input',
        message: "Do you have any instructions or examples for usage",
        name: 'usage',
    },
    {
        type: 'input',
        message: "Please list your resources:",
        name: 'crontributing',
    },
    {
        type: 'input',
        message: "What are your instructions to test your project?",
        name: 'test',
    },
    {
        type: 'list',
        message: "What liscense do you use?",
        choices: ['APACHE 2.0', 'MIT', 'GPLv3', 'Mozilla 2.0', 'Boost 1.0', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: "Please enter your github username:",
        name: 'username',
    },
    {
        type: 'input',
        message: "Please provide a link to your github:",
        name: 'link',
    },
    {
        type: 'input',
        message: "Please enter your email:",
        name: 'email',
    },
    {
        type: 'input',
        message: "How can you be contacted with any questions?",
        name: 'contact',
    },

];

//function to write README file
function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        console.log('Loading README..')
    })
}

//function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            var infoInput = generateMarkdown(response)
            writeFile('./output/README.md', infoInput)
        })
}

// Function call to initialize app
init();
