import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import AboutPage from './components/Aboutpage/AboutPage.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ChatWithMe from './components/Chat/ChatWithMe.jsx';
import AboutDE from './components/About/AboutDE.jsx';
import AboutMD from './components/About/AboutMD.jsx';
import AboutNI from './components/About/AboutNI.jsx';
import AboutSH from './components/About/AboutSH.jsx';
import Project from './components/Project/Project.jsx';

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
