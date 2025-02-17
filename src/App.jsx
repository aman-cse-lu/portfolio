import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; 
// import './App.css';
import Aos from 'aos';
import "aos/dist/aos.css";



function App() {
 useEffect(() => {
   Aos.init();
 
   
 }, [])
 
  return (
    <>
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact/>
    </>

  );
};

export default App;
