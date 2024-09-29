import React from "react";
import "../styles/Education.css";

const Education = () => {
  const education = [
    { degree: "Software Development", institution: "Base Camp Coding Academy Graduate Institute", year: "2024" },
    { degree: "High School Diploma", institution: "Local High School", year: "2018" },
    // Add more education details here
  ];

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <div className="education-list">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p>{edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
