import React from 'react'
import pdf from '../pdf/Resume.pdf';
import hero from './data/hero.json';

const Home = () => {
  return (
    <>
      <div className="container home">
        <div className="left">
          <h1>Aman fuyduibj uiiyuerj iurrgyvurf vyurfvhvn urgjv </h1>
          <a href={pdf} download="resume.pdf" className="btn btn-outline-success">Download Resume</a>
        </div>
        <div className="right">
          <div className="image">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;