import React from "react";
import './About.css'
import about_profile from '../../assets/about_profile.jpg'
import theme_pattern from '../../assets/theme_pattern.svg'

const AboutMe = () => {
  return (
    <div className="container">
      <div className="section">
        <h1 className="title">About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="section">
        <img src={about_profile} alt="" className="about_profile"/>
        <p className="text">
          Hi, I'm <span className="highlight">Decendman Pohthmi</span>, a BTech CSE student with a passion for software development. 
          I'm currently working on several projects, including:
        </p>
      </div>
      <div className="section">
        <ul className="list">
          <li>A visual group study platform with AI tutorials</li>
          <li>A portfolio project</li>
          <li>TastyBites - a subscription-based food delivery system</li>
          <li>A music sheet reader that converts piano sheet codes into audible music</li>
          <li>MyWeather App - a weather forecasting application</li>
        </ul>
      </div>
      <div className="section">
        <p className="text">
          I work with technologies like Java EE, Python, PostgreSQL, MongoDB, and the MERN stack.
        </p>
      </div>
      <div className="section">
        <p className="text">
          Feel free to reach out to me at: 
          <a href="mailto:decendmanpohthmi@gmail.com" className="link">
            decendmanpohthmi@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
