import React from 'react';
import '../styles/Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faHtml5, faCss3, faJsSquare, faReact, faJava, faGitAlt, faNodeJs } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: faPython },
    { name: 'HTML', icon: faHtml5 },
    { name: 'CSS', icon: faCss3 },
    { name: 'JavaScript', icon: faJsSquare },
    { name: 'React', icon: faReact },
    { name: 'Django', icon: faNodeJs }, // Replace with a Django icon if you find one
    { name: 'Git & GitHub', icon: faGitAlt },
    { name: 'Node.js', icon: faNodeJs },
    { name: 'Java', icon: faJava },
    { name: 'Spring', icon: faNodeJs }, // Replace with a Spring icon if you find one
    { name: 'SQL', icon: faNodeJs }, // Replace with an SQL icon if you find one
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <FontAwesomeIcon icon={skill.icon} style={{ marginRight: '8px' }} />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
