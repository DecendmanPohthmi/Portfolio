import React from "react";
import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="flex justify-center gap-6 text-xl mb-3">
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-gray-400 transition duration-300" />
        </a>
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-gray-400 transition duration-300" />
        </a>
        <a href="mailto:decendmanpohthmi@gmail.com">
          <FaEnvelope className="hover:text-gray-400 transition duration-300" />
        </a>
      </div>
      <p className="text-sm opacity-80">
        © {new Date().getFullYear()} CodeXplorer. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
