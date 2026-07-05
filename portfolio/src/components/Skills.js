import React from 'react';
import './Skills.css';
import { FaReact, FaNode, FaPython, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'Node.js', icon: <FaNode />, level: 80 },
    { name: 'TypeScript', icon: <SiTypescript />, level: 75 },
    { name: 'Python', icon: <FaPython />, level: 70 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'PostgreSQL', icon: <SiPostgresql />, level: 75 },
    { name: 'Docker', icon: <FaDocker />, level: 70 },
    { name: 'AWS', icon: <FaAws />, level: 65 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                  data-level={skill.level}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
