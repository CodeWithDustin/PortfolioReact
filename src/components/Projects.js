import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    { title: "Solkvagon Delearship", description: "Description" },
    { title: "Base Camp Library", description: "Description" },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
