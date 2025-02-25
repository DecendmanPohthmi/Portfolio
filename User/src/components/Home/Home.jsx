import React from 'react';
import './Home.css';
import profile_image from '../../assets/profile_img.png';

const Home = () => {
  return (
    <div className="home" id='home'>
      <div className="content">
        <div className="text">
          <h1>Hi we are <span>CodeXplorer.</span> <br /> A Team of <span>Innovative Developers</span></h1>
          <p>We specialize in crafting exceptional digital experiences, pushing the limits of modern web technologies.</p>
        </div>
        <div className="image-container">
          <img src={profile_image} alt="CodeXplorer Logo" className="profile-image"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
