import React, { useState } from "react";
import './Navbar.css'
import logo from "../assets/profile_logo.png";
import Anchorlink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <img src={logo} alt="Logo" />
      </a>

      <ul className="nav-menu">
        <li><Anchorlink className="anchor-link" href="#home"><p>Home</p></Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#aboutpage"><p>About Us</p></Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#project"><p>Project</p></Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#contact"><p>Contact</p></Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#chat"><p>Chat</p></Anchorlink></li>
      </ul>

      <div className="nav-connect"><Anchorlink className="anchor-link" href="#contact">Connect with Us</Anchorlink></div>
    </nav>
  );
};

export default Navbar;
