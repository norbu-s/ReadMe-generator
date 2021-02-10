const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the description of your project?",
            name: "description"
        },
        {
            type: "input",
            message: "What is the User Story?",
            name: "UserStory"
        },
        {
            type: "input",
            message: "Are there any pre-requisites?",
            name: "Prerequisities"
        },
        {
            type: "input",
            message: "How do you install your project?",
            name: "Installation"
        },
        {
            type: "input",
            message: "How do you test this Application?",
            name: "Tests"
        },
        {
            type: "input",
            message: "What are the resources that you used?",
            name: "Links"
        },
        {
            type: "list",
            message: "Please select a type of license.",
            name: "license",
            choices: [
                "MIT",
                "Apache",
                "ISC",
                "GNU GPLv3"
            ]
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email"
        },
    ]);
};

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<link rel="stylesheet" href="Assets/style.css">
<title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">Title: ${answers.title}</h1>
  <br>
  <ul>
  <p class="title"> <strong>Project Description:</strong><br>${answers.description}.</p>
  <p class="description"> <strong>User Story:</strong> <br>${answers.UserStory}.</p>
  <p class="description"> <strong>Pre-requisities:</strong> <br>${answers.Prerequisities}.</p>
  <p class="description"> <strong>Installation:</strong> <br>${answers.Installation}.</p>
  <p class="description"> <strong>Tests:</strong> <br>${answers.Tests}.</p>
  <p class="description"> <strong>Links:</strong> <br> ${answers.Links}.</p>
  <p class="description"> <strong>Github Username:</strong> <br>${answers.username}.</p>
  <p class="description"> <strong>Contact Info:</strong> <br>${answers.email}.</p>
</ul>
</div>
</div>
</body>
</html>`;

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to index.html'))
      .catch((err) => console.error(err));
  };
  
  init();
