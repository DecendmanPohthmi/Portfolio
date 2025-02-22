import React from 'react'
import './Home.css'
import profile_image from '../../assets/profile_img.jpeg'

const Home = () => {
  return (
    <div className='home'>
      <img src={profile_image} alt="" className='profile-image'/>
      <h1>I'm Decendman Pohthmi <span>Wen Developer</span></h1>
      <p>I am a </p>
    </div>
  )
}

export default Home;
