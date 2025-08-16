import React from 'react' 
import Landing from './components/landing'
import NavBar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Experience from './components/experience'
import Contact from './components/contact'
function App() {

  return (
    <>
      <NavBar />      
      <Landing />
      <About />
      <Experience />
      <Projects/>
      <Contact />
    </>
  )
}

export default App
