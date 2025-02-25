import React from "react";
import "./About.css";
import de_profile from "../../assets/about_profile.jpg";
import md_profile from "../../assets/MD_profile.jpeg";
import sh_profile from "../../assets/Sh_profile.jpeg";
import ni_profile from "../../assets/NI_profile.jpeg";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <h1 className="main-title">About Our Team</h1>
      
      <div className="profiles-container">
        {/* Decendman Pohthmi */}
        <div id="aboutDE" className="profile-card">
          <h2 className="title">Decendman Pohthmi</h2>
          <img src={de_profile} alt="Decendman Pohthmi" className="about_profile" />
          <p className="text">
            Hi, I'm <span className="highlight">Decendman Pohthmi</span>, a BTech CSE student with a passion for software development.
          </p>
          <p className="text">
            I work with Java EE, Python, PostgreSQL, MongoDB, and the MERN stack.
          </p>
          <p className="contact">
            Contact: <a href="mailto:decendmanpohthmi@gmail.com" className="link">decendmanpohthmi@gmail.com</a>
          </p>
        </div>

        {/* MD Khalid Ansari */}
        <div id="aboutMD" className="profile-card">
          <h2 className="title">MD Khalid Ansari</h2>
          <img src={md_profile} alt="MD Khalid Ansari" className="about_profile" />
          <p className="text">
            Hi, I'm <span className="highlight">MD Khalid Ansari</span>, a BTech CSE student passionate about software development.
          </p>
          <p className="text">
            I work with Java EE, Python, PostgreSQL, MongoDB, and the MERN stack.
          </p>
          <p className="contact">
            Contact: <a href="mailto:mdkhalidansari@gmail.com" className="link">mdkhalidansari@gmail.com</a>
          </p>
        </div>

        {/* Nitesh Sharma */}
        <div id="aboutNI" className="profile-card">
          <h2 className="title">Nitesh Sharma</h2>
          <img src={ni_profile} alt="Nitesh Sharma" className="about_profile" />
          <p className="text">
            Hi, I'm <span className="highlight">Nitesh Sharma</span>, a BTech CSE student passionate about software development.
          </p>
          <p className="text">
            I work with Java EE, Python, PostgreSQL, MongoDB, and the MERN stack.
          </p>
          <p className="contact">
            Contact: <a href="mailto:mrniteshsharma@gmail.com" className="link">mrniteshsharma@gmail.com</a>
          </p>
        </div>

        {/* Shvraj Deka */}
        <div id="aboutSR" className="profile-card">
          <h2 className="title">Shvraj Deka</h2>
          <img src={sh_profile} alt="Shvraj Deka" className="about_profile" />
          <p className="text">
            Hi, I'm <span className="highlight">Shvraj Deka</span>, a BTech CSE student passionate about software development.
          </p>
          <p className="text">
            I work with Java EE, Python, PostgreSQL, MongoDB, and the MERN stack.
          </p>
          <p className="contact">
            Contact: <a href="mailto:shvrajdeka@gmail.com" className="link">shvrajdeka@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;