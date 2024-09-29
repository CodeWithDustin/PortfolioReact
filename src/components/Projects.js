import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  const projects = [
    { 
      title: "Right Way Realty", 
      description: "A Real Estate website built for a client to use for their business.",
      liveLink: "https://right-way-realty-44017af93d21.herokuapp.com/",
      githubLink: "https://github.com/rramola/RightWayRealty"
    },
    { 
      title: "Solkvagon Dealership", 
      description: "Text-Based Python project about a car dealership with multiple admin levels and password hashing.",
      liveLink: "",
      githubLink: "https://github.com/CodeWithDustin/Solksvwagon-Dealership"
    },
    { 
      title: "Base Camp Library", 
      description: "Text-Based Python project for a library interface terminal for checking in/out books.",
      liveLink: "",
      githubLink: "https://github.com/CodeWithDustin/BaseCampLibrary"
    },
    { 
      title: "Frog Heads Forum", 
      description: "A forum board for users to post pictures, ideas, or talk about anything.",
      liveLink: "https://frog-heads-forum-bc12bf03c1da.herokuapp.com/",
      githubLink: "https://github.com/CodeWithDustin/Frog-Heads-Forum"
    },
    { 
      title: "Fallout Wiki", 
      description: "A wiki built because of my love for the Fallout games.",
      liveLink: "",
      githubLink: "https://github.com/CodeWithDustin/Fallout-Wiki-Project"
    },
    { 
      title: "Fictional Charity", 
      description: "Second HTML/CSS website I built.",
      liveLink: "https://codewithdustin.github.io/fictionalcharity/",
      githubLink: "https://github.com/CodeWithDustin/fictionalcharity"
    },
    { 
      title: "The Goat Website", 
      description: "First HTML/CSS website I built.",
      liveLink: "https://codewithdustin.github.io/TheGoatWebsite/",
      githubLink: "https://github.com/CodeWithDustin/TheGoatWebsite"
    },
    // Add more projects here
  ];

  return (
    <section id="projects" className="projects" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-link" title="Live Demo"></i>
              </a>
            )}
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" title="GitHub Repository"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
