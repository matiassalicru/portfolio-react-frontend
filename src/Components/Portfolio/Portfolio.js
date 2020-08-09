import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Portfolio.css";

function Portfolio(){
    const [projects, setProjects] = useState({});

    useEffect(() => {
        axios.get("https://portfolio-react-backend.herokuapp.com/portfolio")
            .then(
                res => setProjects(res.data)
                )
            }, [setProjects]);

            function expand (index) {
                const modal = document.getElementById("modal");
                const image = document.getElementById('image');
                const description = document.getElementById("description");

                
                switch (index) {
                  case 0:
                    modal.classList.add("open");
                    image.src = projects[index].image;
                    description.innerText = projects[index].description;
                    break;
                  case 1:
                    modal.classList.add("open");
                    image.src = projects[index].image;
                    description.innerText = projects[index].description;
                    break;
                  case 2:
                    modal.classList.add("open");
                    image.src = projects[index].image;
                    description.innerText = projects[index].description;
                    break;
                  case 3:
                    modal.classList.add("open");
                    image.src = projects[index].image;
                    description.innerText = projects[index].description;
                    break;
                  case 4:
                    modal.classList.add("open");
                    image.src = projects[index].image;
                    description.innerText = projects[index].description;
                    break;
                  case 5:
                    modal.classList.add("open");
                    image.src = projects[index].image;
                    description.innerText = projects[index].description;
                    break;
                  default:
                    break;
                }

                 
            }

            function handleClick(){
                
                  const modal = document.getElementById("modal");

                  if (modal.classList.contains("open")) {
                    modal.classList.remove("open");
                  }
                
            }

            

    return (
        <div className="projects-container">
          <h1>Proyectos</h1>
          <small>Click en un proyecto para expandir</small>
          <div className="individual-cards-container">
            {projects.length > 0 &&
              projects.map((project, index) => (
                <div
                  className="individual-card"
                  key={index}
                  data-card={index}
                  onClick={() => expand(index)}
                >
                  <div className="project-name">{project.name}</div>
                  <div className="img-container">
                    <img
                      className="project-image"
                      alt="project"
                      src={project.image}
                    ></img>
                  </div>

                  <p className="project-deploy">Deploy en: {project.deploy}</p>

                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      href={project.link}
                    >
                      Visitar este proyecto
                    </a>
                  </div>
              ))}
          </div>
          <div className="modal" id="modal" onClick={handleClick}>
            <img id="image" src="" alt="" className="full-card" />
            <p className="modal-description" id="description"></p>
          </div>
        </div>
    );
}

export default Portfolio;