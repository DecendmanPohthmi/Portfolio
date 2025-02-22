import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}

export default App
