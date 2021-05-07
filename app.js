const inquirer = require ('inquirer');
const Choices = require('inquirer/lib/objects/choices');
// const fs = require('fs');
// const { formatWithOptions } = require('util');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(firstName, github);

// fs.writeFile('./index.html', pageHTML, err =>{
//   if (err) throw err; 

//   console.log('Portfolio complete! Check out index.html to see the output!')
// });
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name', 
      message: 'What is your name? (required)', 
      validate: nameInput =>{
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your Github Username:',
      validate: githubName =>{
        if (githubName) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'confirm', 
      name: 'confirmAbout', 
      message: 'Would you like to enter some information about yourself for an "About" section?', 
      default: true
    },
    {
      type: 'input', 
      name: 'about', 
      message: 'Provide some information about yourself:', 
      when: ({ confirmAbout}) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
        }
      }
  ]);
};

const promptProject = portfolioData => {
  console.log(`
  =====================
  Add a New Project 
  ====================
  `);

  // if there's no 'projects' array property, create one
  if (!portfolioData.projects){
    portfolioData.projects =[];
  }


  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: projectName =>{
        if (projectName) {
          return true;
        } else {
          console.log('Please enter the name of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)', 
      validate: projectInfo =>{
        if (projectInfo) {
          return true;
        } else {
          console.log('Please enter a description!');
          return false;
        }
      }
    },
    {
      type:'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link', 
      message: 'Enter the Github link to your project (required)', 
      validate: projectLink =>{
        if (projectLink) {
          return true;
        } else {
          console.log('Please enter the link to your project!');
          return false;
        }
      }
    },
    {
      type: 'confirm', 
      name: 'feature', 
      message: 'Would you like to feature this project?', 
      default: false
    },
    {
      type: 'confirm', 
      name: 'confirmAddProject', 
      message: 'Would you like to enter another project?', 
      default: false
    }
  ]);
};

promptUser()
  .then(promptProject)
  .then(portfolioData =>{
    console.log(portfolioData);
  });
