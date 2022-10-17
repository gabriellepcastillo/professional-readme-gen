// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string



// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput, projectLicense) {
  
  return `
  # Project Title: ${userInput.projectTitle}
  ## Project Description: ${userInput.projectDescription}
  ## Table of Contents
  - [Project License](#projectLicense)
  - [Installation Instructions](#projectInstallationInstructions)
  - [Usage Information](#projectUsageInformation)
  - [Contribution Guidelines](#projectContributionGuidelines)
  - [Test Instructions](#projectTestInstructions)
  - [Questions](#questions)

  ## Project License
  ${projectLicense}

  ## Installation Instructions
  ${userInput.projectInstallationInstructions}

  ## Usage Information
  ${userInput.projectUsageInformation}

  ## Contribution Guidelines
  ${userInput.projectContributionGuidelines}

  ## Test Instructions
  ${userInput.projectTestInstructions}

  ## Questions
  Please contact me by email: ${userInput.email}
  GitHub username: [${userInput.githubUsername}](http://github.com/${userInput.githubUsername})
  `;
}

module.exports = generateMarkdown;