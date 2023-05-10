// Define the URL of your JSON data file
const projectsUrl = '../../projects/data.json';

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
        const thumbnailElement = document.createElement('img');
        const detailsElement = document.createElement('div');
        const nameElement = document.createElement('h3');
        const descriptionElement = document.createElement('p');
        const linkElement = document.createElement('a');
        const linkText = document.createTextNode('View on GitHub');
        const separatorElement = document.createElement('hr');

        // Set the text and attributes of the HTML elements
        thumbnailElement.src = project.screenshot;
        nameElement.textContent = project.name;
        descriptionElement.textContent = project.description;
        linkElement.href = project.githubLink;
        linkElement.target = '_blank';
        linkElement.appendChild(linkText);

        // Add the HTML elements to the project element
        detailsElement.appendChild(nameElement);
        detailsElement.appendChild(descriptionElement);
        detailsElement.appendChild(linkElement);

        projectElement.appendChild(thumbnailElement);
        projectElement.appendChild(detailsElement);
        projectElement.appendChild(separatorElement);

        // Add class name to the project element
        projectElement.className = 'project';

        // Add the project element to the project list
        projectList.appendChild(projectElement);
      }
    })
    .catch(error => console.error(error));
});
