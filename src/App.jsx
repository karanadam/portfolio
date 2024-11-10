import React from 'react'
import BlurBackground from './components/BlurBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'

const App = () => {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className='overflow-x-hidden max-w-7xl mx-auto relative z-10'>
        <Navbar />
        <Hero />
        <Projects />
      </main>
    </>
  )
}

export default App