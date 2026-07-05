import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time social media analytics dashboard with data visualization, user engagement metrics, and trend analysis.',
      tech: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with team workspaces, real-time updates, and project tracking features.',
      tech: ['Next.js', 'PostgreSQL', 'Prisma', 'WebSocket'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool using machine learning to create marketing copy, blog posts, and social media content.',
      tech: ['Python', 'FastAPI', 'OpenAI', 'React'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and severe weather alerts.',
      tech: ['React Native', 'Redux', 'OpenWeather API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Portfolio CMS',
      description: 'Content management system specifically designed for developers to showcase their work with custom templates and analytics.',
      tech: ['Vue.js', 'Express', 'MySQL', 'AWS S3'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image" style={{ background: project.image }}></div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub /> Code
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <FaExternalLinkAlt /> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
