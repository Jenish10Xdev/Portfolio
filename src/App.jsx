import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Particles from './Component/Particles'
import Navigation from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/Projects'
import Awards from './Component/Awards'
import Contact from './Component/Contact'
import ContactForm from './Component/ContactForm'

function App() {
  return (
    <>
      {/* Full website background */}
      <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', zIndex: 0 }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      {/* Main content above background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
       
      </div>
    </>
  )
}

export default App
