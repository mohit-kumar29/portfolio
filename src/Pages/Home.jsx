import React from 'react'
import Me from '../Components/Me'
import About from '../Components/About.jsx'
import Skills from '../Components/Skills.jsx'
import Projects from '../Components/Projects.jsx'
import Education from '../Components/Education.jsx'
import Contact from '../Components/Contact.jsx'
const Home = () => {
  return (
    <div >
      <Me />
      {/* <About /> */}
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}

export default Home