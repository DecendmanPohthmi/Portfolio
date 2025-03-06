import React from "react";
import './Home.css';
import profile_image from "../../assets/profile_img.png";

const Home = () => {
  const teamName = "CodeExplorer".split("");

  return (
    <div className="home" id="home">
      <div className="content">
        <div className="text">
          <h1>
            Hi, we are
            <span>
              {teamName.map((letter, index) => (
                <span key={index} className="p_animation">{letter}</span>
              ))}
            </span>
            <br /> A Team of <span>Innovative Developers</span>
          </h1>
          <p className="ptext">
            We specialize in crafting exceptional digital experiences, pushing
            the limits of modern web technologies.
          </p>
        </div>
        <div className="image-container">
          <img src={profile_image} alt="CodeExplorer Logo" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;
