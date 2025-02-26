import React from 'react';
import './Project.css';
import portfolioImage from '../../assets/porfolio_image.png';
import tastybitesImage from '../../assets/tastybite_image.png';

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio showcasing my skills, projects, and experience.",
    image: portfolioImage,
    link: "https://github.com/DecendmanPohthmi/Portfolio.git",
    liveDemo: "https://yourportfolio.com",
    technologies: ["React", "CSS", "JavaScript"]
  },
  {
    name: "TastyBites",
    description: "An online food ordering and subscription-based delivery system.",
    image: tastybitesImage,
    link: "https://github.com/DecendmanPohthmi/My_Resturant.git",
    liveDemo: "https://tastybites.com",
    technologies: ["MERN Stack", "Stripe Payment"]
  }
];

const Project = () => {
  return (
    <div id="project" className="project-container">
      <h1>Our Projects</h1>
      <p>Click a project to view its GitHub repository or live demo.</p>

      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.name} className="project-image" />
            </a>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
