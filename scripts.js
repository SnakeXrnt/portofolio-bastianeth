// Define the URL of your JSON data file
const projectsUrl = 'projects/data.json';

// Wait for the DOM to load before running the JavaScript code
document.addEventListener('DOMContentLoaded', () => {
  // Get a reference to the project list element
  const projectList = document.getElementById('project-list');

  // Load the JSON data using fetch
  fetch(projectsUrl)
    .then(response => response.json())
    .then(data => {
      // Loop through each project in the JSON data
      for (const project of data.projects) {
        // Create the HTML elements for this project
        const projectElement = document.createElement('li');
        const nameElement = document.createElement('h3');
        const descriptionElement = document.createElement('p');
        const screenshotElement = document.createElement('img');
        const linkElement = document.createElement('a');
        const linkText = document.createTextNode('View on GitHub');
        const separatorElement = document.createElement('hr');

        // Set the text and attributes of the HTML elements
        nameElement.textContent = project.name;
        descriptionElement.textContent = project.description;
        screenshotElement.src = project.screenshot;
        linkElement.href = project.githubLink;
        linkElement.target = '_blank';
        linkElement.appendChild(linkText);

        // Add the HTML elements to the project element
        projectElement.appendChild(nameElement);
        projectElement.appendChild(descriptionElement);
        projectElement.appendChild(screenshotElement);
        projectElement.appendChild(linkElement);
        projectElement.appendChild(separatorElement);

        // Add the project element to the project list
        projectList.appendChild(projectElement);
      }
    })
    .catch(error => console.error(error));
});

