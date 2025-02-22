import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ChatWithMe from './components/ChatBox/ChatWithMe.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <ChatWithMe />
    </div>
  )
}

export default App
