import React, { useEffect, useState } from "react";
import axios from "axios";
import "./About.css";

function About() {
  const [information, setInformation] = useState({}); //Con esto hacemos la llamada de los archivos de la API

  useEffect(() => {
    axios
      .get("https://portfolio-react-backend.herokuapp.com/About")
      .then((res) => setInformation(res.data[0]));
  }, [setInformation]);

  function goto() {
    return window.scrollTo(0, window.innerHeight * 2.15);
  }

  return (
    <div className="about">
      <h1>¿Quién soy?</h1>

      <div className="about-me">
        Hola! Mi nombre es <span>Matias </span> tengo 24 años y soy un
        apasionado por la tecnología,{" "}
        <span>poseo un año de experiencia en el desarrollo web</span> y en ese
        tiempo hice algunos proyectos personales que me fueron divertidos de
        crear así como tambien <span>un proyecto freelance</span> para un
        emprendimiento, durante el transcurso de los mismos aprendí mucho acerca
        de tecnologías como JavaScript, React, Node, Git y GitHub, siempre es
        bien recibido el feedback y cualquier opinión que me ayude a llegar a mi
        meta de ser desarrollador Full-Stack.
        <br /> <span>PD: Tambien me gustan los gatos y andar en bici</span>
        <br />
        <br /> <i>Nunca parar de aprender</i>
      </div>

      <div className="about-me-extra">
        <p>Estas son algunas de las tecnologías que más utilizo actualmente:</p>

        <ul className="skills">
          {information.skills &&
            information.skills.map((skill, index) => (
              <li key={index} className="skill btn btn-disabled">
                {skill}
              </li>
            ))}
        </ul>

        <div className="about-me">
          Si querés saber más de mí acá te dejo mi cv hecho en HTML y CSS{" "}
          <span>
            <a href={information.cv} target="_blank" rel="noopener noreferrer">
              (ver cv)
            </a>
          </span>
        </div>
      </div>

      <div onClick={goto} className="arrow-desktop"></div>

      <div className="arrow-mobile"></div>
    </div>
  );
}

export default About;
