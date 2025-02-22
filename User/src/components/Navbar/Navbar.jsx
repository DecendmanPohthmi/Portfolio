import React from 'react'
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='container'>
      <img src={logo} alt="" className="logo" />
      <div className="navbar-menu">
        <li>Home</li>
        <li>AboutMe</li>
        <li>Project</li>
        <li>Skills</li>
        <li>Contack</li>
        <li>Chat</li>
      </div>
      <div className="nav-connect">connect with me</div>
    </div>
  )
}

export default Navbar;
