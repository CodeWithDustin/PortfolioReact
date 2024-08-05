import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Job Title 1",
      company: "Company 1",
      description: "Description of job 1",
    },
    {
      title: "Job Title 2",
      company: "Company 2",
      description: "Description of job 2",
    },
    // Add more experiences here
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
