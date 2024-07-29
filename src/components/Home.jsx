import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/Resume.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';


const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings: ["Welcome to my profile", "My name is Aman", "I'am Full Stack Developer", "Laravel Developer"],
      typedSpeed: 80,
      backSpeed: 70,
      loop: true
    }
    const typed = new Typed(typedRef.current, options)
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className="container home" id="home">
        <div className="left"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h1 ref={typedRef}>

          </h1>
          <a href={pdf} download="resume.pdf" className="btn  my-3 resumebtn">Download Resume</a>
        </div>
        <div className="right">
          <div className="image"
            data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;