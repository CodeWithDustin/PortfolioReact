// Experience.js

import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Computer Technician",
      company: "uBreakiFix Oxford",
      description: [
        "Repair devices that come into the store such as Computers, Game Consoles, Tablets, and Phones.",
        "Order parts needed for repairs.",
        "Provide enthusiastic help and support for customers.",
        "Manage 2600+ inventory within the store.",
        "Make schedules for employees.",
        "Support staff and keep them updated with changes throughout the company.",
        "Trained and guided team members to maintain high productivity and performance metrics.",
      ],
    },
    {
      title: "Software Development Apprentice",
      company: "Base Camp Coding Academy Graduate Institute",
      description: [
        "The Base Camp Coding Academy Graduate Institute is a non-profit dedicated to providing recent high school graduates and adults 20+ an education in software development and computer programming.",
      ],
    },
    {
      title: "Data Specialist",
      company: "mTrade",
      description: ["Data Entry"],
    },
  ];

  return (
    <div id="experience" className="experience section" data-aos="fade-up">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.title}</h3>
          <h4>{exp.company}</h4>
          <div className="experience-description">
            {exp.description.map((desc, i) => (
              <p key={i}>{desc}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
