import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ChatWithMe from './components/ChatBox/ChatWithMe.jsx'
import Footer from './components/Footer/Footer.jsx'
import Project from './components/Project/Project.jsx'
import Contact from './components/Contact/Contact.jsx'

const App = () => {
  return (
    <div className='conatiner'>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <ChatWithMe />
      <Footer />
    </div>
  )
}

export default App
