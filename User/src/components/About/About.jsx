import React from "react";
import "./About.css";
import de_profile from "../../assets/about_profile.jpg";
import md_profile from "../../assets/MD_profile.jpeg";
import sh_profile from "../../assets/Sh_profile.jpeg";
import ni_profile from "../../assets/NI_profile.jpeg";
import java_logo from "../../assets/java/java.svg";
import c_logo from "../../assets/c/c.svg";
import python_logo from "../../assets/python/python.svg";
import js_logo from "../../assets/javascript/javascript.svg";
import type_script_logo from "../../assets/typescript/typescript.svg";
import html_logo from "../../assets/html/html.svg";
import css_logo from "../../assets/css/css.svg";

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
              like Python, PostgreSQL, and MongoDB. I also have experience with
              full-stack development using the MERN stack.
            </p>
            <p className="text">
              Currently, I'm working on projects like a Music sheet-to-audio
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
                  <img src={type_script_logo} alt="TypeScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                  {/* Duplicate the images to create a smooth infinite loop */}
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={c_logo} alt="C" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={type_script_logo} alt="TypeScript" />
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
                  <a href="mailto:decendmanpohthmi@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profiles-container">
          {/* Decendman Pohthmi */}
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
              Currently, I'm working on projects like a Music sheet-to-audio
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
                  <img src={type_script_logo} alt="TypeScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                  {/* Duplicate the images to create a smooth infinite loop */}
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={c_logo} alt="C" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={type_script_logo} alt="TypeScript" />
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
                  <a href="mailto:decendmanpohthmi@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profiles-container">
          {/* Decendman Pohthmi */}
          <div id="aboutNI" className="profile-card">
            <h2 className="title">Nitesh Sharma</h2>
            <img
              src={ni_profile}
              alt="Nitesh Sharma"
              className="about_profile"
            />
            <p className="text">
              Hi, I'm <span className="highlight">Nitesh Sharma</span>, a
              BTech CSE student passionate about software development, web
              development.
            </p>
            <p className="text">
              I specialize in backend development, working with technologies
              like Python, PostgreSQL, and MongoDB. I also have experience with
              full-stack development using the MERN stack.
            </p>
            <p className="text">
              Currently, I'm working on projects like a Music sheet-to-audio
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
                  <img src={type_script_logo} alt="TypeScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                  {/* Duplicate the images to create a smooth infinite loop */}
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={c_logo} alt="C" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={type_script_logo} alt="TypeScript" />
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
                  <a href="mailto:decendmanpohthmi@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="profiles-container">
          {/* Decendman Pohthmi */}
          <div id="aboutSR" className="profile-card">
            <h2 className="title">Shivraj Deka</h2>
            <img
              src={sh_profile}
              alt="Shivraj Deka"
              className="about_profile"
            />
            <p className="text">
              Hi, I'm <span className="highlight">Shivraj Deka</span>, a
              BTech CSE student passionate about software development, web
              development.
            </p>
            <p className="text">
              I specialize in backend development, working with technologies
              like Python, PostgreSQL, and MongoDB. I also have experience with
              full-stack development using the MERN stack.
            </p>
            <p className="text">
              Currently, I'm working on projects like a Music sheet-to-audio
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
                  <img src={type_script_logo} alt="TypeScript" />
                  <img src={css_logo} alt="CSS" />
                  <img src={html_logo} alt="HTML" />
                  {/* Duplicate the images to create a smooth infinite loop */}
                  <img src={java_logo} alt="Java" />
                  <img src={python_logo} alt="Python" />
                  <img src={c_logo} alt="C" />
                  <img src={js_logo} alt="JavaScript" />
                  <img src={type_script_logo} alt="TypeScript" />
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
                  <a href="mailto:decendmanpohthmi@gmail.com">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;