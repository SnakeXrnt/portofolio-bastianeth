document.addEventListener('DOMContentLoaded', function() {
  const projectsFolder = "./projects/";

  // Fetch all JSON files in the projects folder
  fetch(projectsFolder)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, "text/html");
      const jsonFiles = Array.from(html.querySelectorAll('a[href$=".json"]'))
        .map(link => link.href.replace(window.location.href, '').replace(/^\//, ''));


      // Fetch and parse each JSON file and create list items for each project
      jsonFiles.forEach(jsonFile => {
        fetch(`${projectsFolder}${jsonFile}`)
          .then(response => response.json())
          .then(project => {
            const projectList = document.getElementById("project-list");

            // Create list item
            const listItem = document.createElement("li");

            // Create project name heading
            const name = document.createElement("h3");
            name.innerText = project.Name;
            listItem.appendChild(name);

            // Create project description paragraph
            const description = document.createElement("p");
            description.innerText = project.Description;
            listItem.appendChild(description);

            // Create Github link button
            const githubLink = document.createElement("a");
            githubLink.href = project.GithubLink;
            githubLink.target = "_blank";
            githubLink.rel = "noopener noreferrer";
            githubLink.innerText = "Go to Github";
            listItem.appendChild(githubLink);

            projectList.appendChild(listItem);

            // Add horizontal line
            const hr = document.createElement("hr");
            projectList.appendChild(hr);
          });
      });
    })
    .catch(error => console.error(error));
});
