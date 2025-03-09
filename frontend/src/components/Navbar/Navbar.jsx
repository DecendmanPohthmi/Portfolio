import React, { useState } from "react";
import './Navbar.css'
import logo from "../../assets/profile_logo.png";
import Anchorlink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        <img src={logo} alt="Logo" />
      </a>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li><Anchorlink className="anchor-link" href="#home">Home</Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#aboutpage">About Us</Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#project">Project</Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#contact">Contact</Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#chat">Chat</Anchorlink></li>
        <li><Anchorlink className="anchor-link" href="#resume">Resume Download</Anchorlink></li>
      </ul>

      <div className="nav-connect"><Anchorlink className="anchor-link" href="#contact">Connect with Us</Anchorlink></div>
    </nav>
  );
};

export default Navbar;
