import React, { useState } from "react";
import './Navbar.css'
import logo from "../../assets/logo.svg";
import Anchorlink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {

  return (
    <nav className="navbar">
      {/* Logo */}
      <a href="#home" className="logo">
        <img src={logo} alt="Logo" />
      </a>

      {/* Navigation Menu */}
      <ul className="nav-menu">
        <li><Anchorlink className="anchor-link" href="#home"><p>Home</p></Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#about"><p>About Us</p></Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#project"><p>Project</p></Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#contact"><p>Contact</p></Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#chat"><p>Chat</p></Anchorlink></li>
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">Connect with me</div>
    </nav>
  );
};

export default Navbar;
