import React from "react";
import './About.css'
import { useNavigate } from "react-router-dom";
import md_profile from "../assets/MD_profile.jpeg";
import java_logo from "../assets/java/java.svg";
import c_logo from "../assets/c/c.svg";
import python_logo from "../assets/python/python.svg";
import js_logo from "../assets/javascript/javascript.svg";
import html_logo from "../assets/html/html.svg";
import css_logo from "../assets/css/css.svg";
import mongodb_logo from "../assets/database/mongodb.png";
import postgresql_logo from "../assets/database/postgresql.png";

const AboutMD = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const navigate = useNavigate();

  return (
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
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
  );
};

export default AboutMD;
