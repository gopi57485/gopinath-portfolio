import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/Home/About'
import Skills from './Components/Home/Skills'
import Projects from './Components/Home/Projects'
import Contact from './Components/Home/Contact'
import Footer from './Components/Home/Footer'

function App() {
 

  return (
    <>
    <Header />

    <Home />

    <About />

    <Skills />
     
    <Projects />

    <Contact />

    <Footer />

    </>
  )
}

export default App
