import React from 'react';
import './Home.css';
import profile_image from '../../assets/profile_img.png';

const Home = () => {
  return (
    <div className="home" id='home'>
      <div className="content">
        <div className="text">
          <h1>Hi we are <span><p className="p_animation"></p>
          <p className="p_animation">C</p>
          <p className="p_animation">o</p>
          <p className="p_animation">d</p>
          <p className="p_animation">e</p>
          <p className="p_animation">E</p>
          <p className="p_animation">x</p>
          <p className="p_animation">p</p>
          <p className="p_animation">l</p>
          <p className="p_animation">o</p>
          <p className="p_animation">r</p>
          <p className="p_animation">e</p>
          <p className="p_animation">r</p>
          </span> <br /> A Team of <span>Innovative Developers</span></h1>
          <p className='ptext'>We specialize in crafting exceptional digital experiences, pushing the limits of modern web technologies.</p>
        </div>
        <div className="image-container">
          <img src={profile_image} alt="CodeXplorer Logo" className="profile-image"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
