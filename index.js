const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./Assets/generateMarkdown.js');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            message: "What is the title of your project?",
            name: "title",
            when: (answer) => answer.content.includes(title)
        },
        {
            type: "input",
            message: "What is the description of your project?",
            name: "description",
            when: (answer) => answer.content.includes(description)

        },
        {
            type: "input",
            message: "How do you install your project?",
            name: "installation",
            when: (answer) => answer.content.includes(installation)
        },
        {
            type: "input",
            message: "What are the Usage?",
            name: "usage",
            when: (answer) => answer.content.includes(usage)
        },
        {
            type: "input",
            message: "Contributing?",
            name: "contributing",
            when: (answer) => answer.content.includes(contributing)
        },

        {
            type: "input",
            message: "How do you test this Application?",
            name: "tests",
            when: (answer) => answer.content.includes(tests)
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
            ],
            when: (answer) => answer.content.includes(license)
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "username",
            when: (answer) => answer.content.includes(username)
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "questions",
            when: (answer) => answer.content.includes(questions)
        },
    ]);
};

//  const generateMarkdown = (answers) => 
//  when: (answers) => ${answers.description}

// `<!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta http-equiv="X-UA-Compatible" content="ie=edge">
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
// <link rel="stylesheet" type"text/css" href="/Assets/style.css">
// <title>Document</title>
// </head>
//     <body>
//         <h1 class="display-4">Title: ${answers.title}</h1>
//         <br>
//             <div id="toc_container">
//                 <p class="toc_title">Contents</p>
//                     <ul class="toc_list">
//                     <li><a href="#projectDescription"> Project Description</a>
//                     <li><a href="#installation"> Installation</a>
//                     <li><a href="#usage"> Usage</a>
//                     <li><a href="#contributing"> Contributing</a>
//                     <li><a href="#tests"> Tests</a>
//                     <li><a href="#license"> License</a>
//                     <li><a href="#githubUsername"> Github Username</a>
//                     <li><a href="#questions"> Questions</a>
//                     </ul>
//             </div>
//              <div class="jumbotron jumbotron-fluid">
//                 <div class="container">
//                     <ul>
//                     <li><p id="projectDescription"> <strong>Project Description:</strong><br>${answers.description}.</p>
//                     <li><p id="installation"> <strong>Installation:</strong> <br>${answers.installation}.</p>
//                     <li><p id="usage"> <strong>Usage:</strong> <br>${answers.usage}.</p>
//                     <li><p id="contributing"> <strong>Contributing:</strong> <br>${answers.contributing}.</p>
//                     <li><p id="tests"> <strong>Tests:</strong> <br>${answers.tests}.</p>
//                     <li><p id="license"> <strong>License:</strong> <br> ${answers.license}.</p>
//                     <li><p id="githubUsername"> <strong>Github Username:</strong> <br>${answers.username}.</p>
//                     <li><p id="questions"> <strong>Questions: If you face any issues when using this app please contact me by emailing your issues to:</strong>${answers.questions}.<br> How to install NPM?<br>How to Install "Inqurier: Package </p>
//                     </ul>
//                 </div>
//             </div>
//     </body>
// </html>`;

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
      .then(() => console.log('ReadMe file successfully generated'))
      .catch((err) => console.error(err));
  };
  
  init();
