import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import AboutPage from './components/AboutPage/AboutPage.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import ChatWithMe from './components/Chat/ChatWithMe.jsx';
import AboutDE from './components/About/AboutDE.jsx';
import AboutMD from './components/About/AboutMD.jsx';
import AboutNI from './components/About/AboutNI.jsx';
import AboutSH from './components/About/AboutSH.jsx';
import Project from './components/Project/Project.jsx';

const App = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="container">
      <Navbar />
      <Routes>
        {/* Home Route with Nested Components */}
        <Route path="/" element={
          <>
            <Home />
            <AboutPage />
            <Project />
            <Contact />
            <ChatWithMe />
          </>
        } />
        
        {/* Other Routes */}
        <Route path="/about-de" element={<AboutDE />} />
        <Route path="/about-md" element={<AboutMD />} />
        <Route path="/about-ni" element={<AboutNI />} />
        <Route path="/about-sh" element={<AboutSH />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
