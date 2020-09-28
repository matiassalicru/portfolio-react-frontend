import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Portfolio.css";
import loadingImg from "../../Data/27804-loading-triangle.json";
import Lottie from "react-lottie";

function Portfolio() {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://portfolio-react-backend.herokuapp.com/portfolio")
      .then((res) => setProjects(res.data))
      .then(
        setTimeout(() => {
          setLoading(false)
        }, 2000)
      );
  }, [setProjects]);

  function expand(index) {
    const modal = document.getElementById("modal");
    const image = document.getElementById("image");
    const description = document.getElementById("description");


    switch (index) {
      case 0:
        modal.classList.add("open");
        image.src = projects[index].imageG;
        description.innerText = projects[index].description;
        break;
      case 1:
        modal.classList.add("open");
        image.src = projects[index].imageG;
        description.innerText = projects[index].description;
        break;
      case 2:
        modal.classList.add("open");
        image.src = projects[index].imageG;
        description.innerText = projects[index].description;
        break;
      case 3:
        modal.classList.add("open");
        image.src = projects[index].imageG;
        description.innerText = projects[index].description;
        break;
      case 4:
        modal.classList.add("open");
        image.src = projects[index].imageG;
        description.innerText = projects[index].description;
        break;
      case 5:
        modal.classList.add("open");
        image.src = projects[index].imageG;
        description.innerText = projects[index].description;
        break;
      case 6:
        modal.classList.add("open");
        image.src = projects[index].imageG;
        description.innerText = projects[index].description;
        break;
      case 7:
        modal.classList.add("open");
        image.src = projects[index].imageG;
        description.innerText = projects[index].description;
        break;
      default:
        break;
    }
  }

  function handleClick() {
    const modal = document.getElementById("modal");

    if (modal.classList.contains("open")) {
      modal.classList.remove("open");
    }
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="projects-container">
      <h1>Proyectos</h1>
      <small>Click en un proyecto para expandir</small>
      {loading ? (
        <div>
          <Lottie options={defaultOptions} width="250px" />
        </div>
      ) : (
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
      )}

      <div className="modal" id="modal" onClick={handleClick}>
        <img id="image" src="" alt="" className="full-card" />
        <div className="project-modal-description">
          <p className="modal-description" id="description"></p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
