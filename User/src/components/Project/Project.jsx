import React from 'react';
import './Project.css';
import portfolioImage from '../../assets/porfolio_image.png';
import tastybitesImage from '../../assets/tastybite_image.png';

const Project = () => {
  return (
    <div id="project" className="project-container">
      <h1>Our Projects</h1>
      <p>Click on a project to view its GitHub repository.</p>

      <div className="project-list">
        {/* Portfolio Project */}
        <div className="project-item">
          <a href="https://github.com/yourusername/portfolio" target="_blank" rel="noopener noreferrer">
            <img src={portfolioImage} alt="Portfolio Project" className="project-image" />
          </a>
          <h2>Portfolio Website</h2>
          <p>A personal portfolio website showcasing my skills, projects, and experience.</p>
        </div>

        {/* TastyBites Project */}
        <div className="project-item">
          <a href="https://github.com/yourusername/tastybites" target="_blank" rel="noopener noreferrer">
            <img src={tastybitesImage} alt="TastyBites Project" className="project-image" />
          </a>
          <h2>TastyBites</h2>
          <p>An online food ordering and subscription-based food delivery system.</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
