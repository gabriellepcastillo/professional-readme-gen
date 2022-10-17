// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");

//Importing generate markdown
const generateMarkdown = require("./generateMarkdown");
const { type } = require("os");

// TODO: Create an array of questions for user input
const questions = [
    {
        name:"projectTitle",
        type:"input",
        message:"What is the title of your project?",
// validate to make sure they put an input
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your projcect title.');
                return false;
            }
        }
    },
    {
        name:"projectDescription",
        type:"input",
        message:"What is the description of your project?",
// validate to make sure they put an input
        validate: userInput => {
        if (userInput) {
            return true;
        } else {
            console.log('Please enter your project description.');
            return false;
        }
    }
    },
    {
        name:"projectLicense",
        type:"list",
        message:"Choose license type.",
        choices:['Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License'],
// validate to make sure they put an input
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please pick a license.');
                return false;
            }
        }
    },
    {
        name:"projectInstallationInstructions",
        type:"input",
        message:"Is there an installation process? What are the installation Instructions?",
// validate to make sure they put an input
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your projcects installation process.');
                return false;
            }
        }
    },
    {
        name:"projectUsageInformation",
        type:"input",
        message:"Fill in your Usage Information.",
// validate to make sure they put an input
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your usage information.');
                return false;
            }
        }
    },
    {
        name:"projectContributionGuidelines",
        type:"input",
        message:"Fill in your Contributing Guidelines.",
// validate to make sure they put an input
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your contribution guidelines.');
                return false;
            }
        }
    },
    {
        name:"projectTestInstructions",
        type:"input",
        message:"Fill in your Test Instructions.",
// validate to make sure they put an input
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your projcects test instructions.');
                return false;
            }
        }
    },
    {
        name:"githubUsername",
        type:"input",
        message:"What is your GitHub username?",
// validate to make sure they put an input
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        name:"email",
        type:"input",
        message:"What is your email address?",
// validate to make sure they put an input
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }
    },
    {
        name:"questions",
        type:"input",
        message:"Please list how you would like to be contacted.",
// validate to make sure they put an input
        validate: userInput => {
            if (userInput) {
                return true;
            } else {
                console.log('Please enter your how you would like to be contacted.');
                return false
            }
        }
    }
];
// end of questions array

// TODO: Create a function to write README file

 function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
         if (error) {
             return console.log('There was an error : ' + error);
         };
    });
 };

 function renderLicenseBadge(license) {
    //create license badge 
    // console.log(license,"from the render license badge function")
    if (license === "Apache License 2.0") {
        var licenseBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license === "GNU General Public License v3.0") {
        var licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (license === "MIT License") {
        var licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }

    return licenseBadge
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((userInput)=>{
    console.log(userInput)

    // create license 
        var projectLicense = renderLicenseBadge(userInput.projectLicense)

    //Take user input and make markdown from it
        var markDown = generateMarkdown(userInput, projectLicense)
        // console.log(markDown)
        // create file from markDown
        writeToFile("README.md", markDown);
    });
};

// Function call to initialize app
init();