import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate fullstack developer who loves creating things that live on the internet.
              My journey in web development started back in 2018 when I decided to try editing custom themes
              — turns out hacking together a custom layout taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at various companies and startups,
              building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              My main focus these days is building accessible, inclusive products and digital experiences
              that make a difference. I'm constantly learning new technologies and improving my craft.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="tech-list">
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>TypeScript</li>
              <li>Python</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="profile-image"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
