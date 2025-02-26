import React from "react";
import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p className="text-sm opacity-80">
        © {new Date().getFullYear()} CodeXplorer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
