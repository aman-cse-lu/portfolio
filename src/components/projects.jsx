import React from 'react'
import projects from './data/projects.json';
const Projects = () => {
  return (
    <>
      <div className="container projects my-3" id="projects">
        <h1>Projects</h1>
        <div className="row d-flex justify-content-center align-content-center">
          {projects.map((data) => (
            <>
              <div key={data.id} className="my-4 col-sm-6 col-md-4 col-lg-3  mx-4">
                <div className="card"
                  style={{
                    width: '18rem',
                    background: 'rgb(0, 0, 0)',
                    // border: '2px solid rgb(255, 0, 170)',
                    boxShadow: ' 5px 5px 10px 10px rgba(244, 95, 160, 0.5)',
                    color: '#e876b1'
                  }}
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img src={data.imageSrc} className="card-img-top" alt="..."
                      style={
                        {
                          width: '250px',
                          height: '200px',
                          border: '1px solid rgb(255, 0, 170)',
                          borderRadius: '10px'
                        }
                      }

                    />
                  </div>

                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text"> {data.description}</p>
                    <a href={data.demo} className="btn  mx-3 resumebtn">Demo</a>
                    <a href={data.source} className="btn  resumebtn">Code</a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
