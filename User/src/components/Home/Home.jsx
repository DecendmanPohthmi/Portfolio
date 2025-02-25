import React from 'react'
import './Home.css'
import profile_image from '../../assets/profile_img.png'

const Home = () => {
  return (
    <div className='home' id='home'>
      <img src={profile_image} alt="" className='profile-image'/>
      <h1>Hi we are <span>CodeXplorer</span></h1>
    </div>
  )
}

export default Home;
