import React, { useState } from "react";
import "./About.css";
import de_profile from "../../assets/about_profile.jpg";
import md_profile from "../../assets/MD_profile.jpeg";
import sh_profile from "../../assets/Sh_profile.jpeg";
import ni_profile from "../../assets/NI_profile.jpeg";
import java_logo from "../../assets/java/java.svg";
import c_logo from "../../assets/c/c.svg";
import python_logo from "../../assets/python/python.svg";
import js_logo from "../../assets/javascript/javascript.svg";
import html_logo from "../../assets/html/html.svg";
import css_logo from "../../assets/css/css.svg";
import mongodb_logo from "../../assets/database/mongodb.png";
import postgresql_logo from "../../assets/database/postgresql.png";
import resume from '../../assets/resume.pdf'

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <h1 className="main-title">About Our Team</h1>
      <div className="container_a">
        <div className="profiles-container">
          {/* Decendman Pohthmi */}
          <div id="aboutDE" className="profile-card">
            <h2 className="title">Decendman Pohthmi</h2>
            <img
              src={de_profile}
              alt="Decendman Pohthmi"
              className="about_profile"
            />
            <p className="text">
              Hi, I'm <span className="highlight">Decendman Pohthmi</span>, a
              BTech CSE student passionate about software development, web
              development.
            </p>
            <p className="text">
              I specialize in backend development, working with technologies
              like Python, Node, Express, PostgreSQL, and MongoDB. I also have
              experience with full-stack development using the MERN stack.
            </p>
            <p className="text">
              Currently, I'm working on projects like a Music audio-to-sheet
              converter. I'm also expanding my portfolio and building a
              subscription-based food delivery system for TastyBites.
            </p>

            <div className="programming-logo">
              <div className="logo-track">
                <ul>
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={c_logo} alt="C" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                  <img src={mongodb_logo} alt="mongodb" />
                  <img src={postgresql_logo} alt="postgresql" />
                  {/* Duplicate the images to create a smooth infinite loop */}
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={c_logo} alt="C" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                  <img src={mongodb_logo} alt="mongodb" />
                  <img src={postgresql_logo} alt="postgresql" />
                </ul>
              </div>
            </div>

            <div className="contact-details">
              <h3>Contact & Links</h3>
              <ul>
                <li>
                  <a href="https://github.com/your-github" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://leetcode.com/your-leetcode" target="_blank">
                    LeetCode
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/your-instagram"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:decendmanpohthmi@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profiles-container">
          {/* Khalid Ansari */}
          <div id="aboutMD" className="profile-card">
            <h2 className="title">MD Khalid Ansari</h2>
            <img
              src={md_profile}
              alt="Khalid Ansari "
              className="about_profile"
            />
            <p className="text">
              Hi, I'm <span className="highlight">Md Khalid Ansari</span>, a
              BTech CSE student passionate about software development, web
              development.
            </p>
            <p className="text">
              I specialize in backend development, working with technologies
              like Python, PostgreSQL, and MongoDB. I also have experience with
              full-stack development using the MERN stack.
            </p>
            <p className="text">
              Currently, I'm working on a subscription-based food delivery
              system for TastyBites.. I'm also expanding my portfolio.
            </p>

            <div className="programming-logo">
              <div className="logo-track">
                <ul>
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={c_logo} alt="C" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                  {/* Duplicate the images to create a smooth infinite loop */}
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={c_logo} alt="C" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                </ul>
              </div>
            </div>

            <div className="contact-details">
              <h3>Contact & Links</h3>
              <ul>
                <li>
                  <a href="https://github.com/your-github" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://leetcode.com/your-leetcode" target="_blank">
                    LeetCode
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/your-instagram"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:mdkhalid.finance@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profiles-container">
          {/* Nitesh Sharma  */}
          <div id="aboutNI" className="profile-card">
            <h2 className="title">Nitesh Sharma</h2>
            <img
              src={ni_profile}
              alt="Nitesh Sharma"
              className="about_profile"
            />
            <p className="text">
              Hi, I'm <span className="highlight">Nitesh Sharma</span>, a BTech
              CSE student passionate about software development, web
              development.
            </p>
            <p className="text">
              I specialize in backend development, working with technologies
              like Python, PostgreSQL, and MongoDB. I also have experience with
              full-stack development using the MERN stack.
            </p>
            <p className="text">
              Currently, I'm working on a subscription-based food delivery
              system for TastyBites.. I'm also expanding my portfolio.
            </p>

            <div className="programming-logo">
              <div className="logo-track">
                <ul>
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                  {/* Duplicate the images to create a smooth infinite loop */}
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                </ul>
              </div>
            </div>

            <div className="contact-details">
              <h3>Contact & Links</h3>
              <ul>
                <li>
                  <a href="https://github.com/your-github" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://leetcode.com/your-leetcode" target="_blank">
                    LeetCode
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/your-instagram"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:mrnitesh2580@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profiles-container">
          {/* Shivraj Deka */}
          <div id="aboutSR" className="profile-card">
            <h2 className="title">Sivraj Deka</h2>
            <img
              src={sh_profile}
              alt="Shivraj Deka"
              className="about_profile"
            />
            <p className="text">
              Hi, I'm <span className="highlight">Sivraj Deka</span>, a BTech
              CSE student passionate about web designing, web development.
            </p>
            <p className="text">
              I specialize in front-end and UI/UX designing, working with
              technologies like Figma, Canva, Adobe XD. I'am also learning
              full-stack development with MERN stack. Also i have invested my
              time in learning about game development as I have a keen interest
              in that technology too.
            </p>
            <p className="text">
              Currently, I'm working on a subscription-based food delivery
              system for TastyBites.. I'm also expanding my portfolio.
            </p>

            <div className="programming-logo">
              <div className="logo-track">
                <ul>
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                  {/* Duplicate the images to create a smooth infinite loop */}
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                </ul>
              </div>
            </div>

            <div className="contact-details">
              <h3>Contact & Links</h3>
              <ul>
                <li>
                  <a href="https://github.com/ShivDeka" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://leetcode.com/your-leetcode" target="_blank">
                    LeetCode
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/your-instagram"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="mailto:shivdeka0987@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Email Input */}
      <div className="resume">
        <button className="redume-download">
          <a href={resume} download="resume">
            Download
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
