import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import AboutPage from './components/AboutPage.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ChatWithMe from './components/ChatWithMe.jsx';
import AboutDE from './components/AboutDE.jsx';
import AboutMD from './components/AboutMD.jsx';
import AboutNI from './components/AboutNI.jsx';
import AboutSH from './components/AboutSH.jsx';

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AboutPage />} />
        <Route path="/about-de" element={<AboutDE />} />
        <Route path="/about-md" element={<AboutMD />} />
        <Route path="/about-ni" element={<AboutNI />} />
        <Route path="/about-sh" element={<AboutSH />} />
        <Route path="/" element={<Project />} />
        <Route path="/" element={<Contact />} />
        <Route path="/" element={<ChatWithMe />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
