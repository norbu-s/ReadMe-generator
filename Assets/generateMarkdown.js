// Project Description
function renderProjectDesciption(ProjectDesciption) {
  if (ProjectDesciption === "") {
      return "";}
  if (ProjectDesciption !== "") {
      return "# Description: ${description}"
  }
}

// Installation
function renderInstallation(Installation) {
  if (Installation === "") {
      return "";}
  if (Installation !== "") {
      return "# Installation: ${installation}"
  }
}

//Usage
function renderUsage(Usage) {
  if (Usage === "") {
      return "";}
  if (Usage !== "") {
      return "# Usage: ${usage}"
  }
}

//Usage
function renderContributing(Contributing) {
  if (Contributing === "") {
      return "";}
  if (Contributing !== "") {
      return "# Contributing: ${contributing}"
  }
}

//Usage
function renderTest(Test) {
  if (Test === "") {
      return "";}
  if (Test !== "") {
      return "# Tests ${tests}"
  }
}

//render license link
function renderLicenseBadge(license){
  if (License === ''){
      return '';
  } 
  if (License === 'Apache 2.0 License') {
      return '(https://opensource.org/licenses/Apache-2.0)';
  if (License === 'GNU GPLv3') {
          return '(https://www.gnu.org/licenses/gpl-3.0)';
  if (License === 'ISC') {
          return '(https://opensource.org/licenses/ISC)';
  } else {
          return '(https://opensource.org/licenses/MIT)';
      }
    }
  }
}

//Licence
function renderLicense(License) {
  if (License === "") {
      return "";}
  if (License !== "") {
      return "# License This application is covered under the ${license} license.For more information, [click here]${renderLicenseLink(license)}.";
  }
}


//GutHub Username
function renderUsername(Git) {
  if (Username === "") {
      return "";}
  if (Username !== "") {
      return "# Github Username: ${questions}"
  }
}

//License
function renderQuestions(Questions) {
  if (Questions === "") {
      return "";}
  if (Questions !== "") {
      return "#If you face any issues when using this app please contact me by emailing your issues to ${questions}.<br> How to install NPM?<br>How to Install Ingurier."
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.License)}
  ${renderProjectDesciption(data.Description)}
  ${renderInstallation(data.Installation)}
  ${renderUsage(data.Usage)}
  ${renderContributing(data.Contributing)}
  ${renderTest(data.Test)}
  ${renderLicense(data.License)}
  ${renderUsername(data.Username)}
  ${renderQuestions(data.Questions)}
`;
}



module.exports = generateMarkdown;