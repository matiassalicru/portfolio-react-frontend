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
        <span>tengo un año de experiencia en el desarrollo web</span> y en ese
        tiempo hice algunos proyectos personales que me fueron divertidos de
        crear así como tambien <span>un proyecto freelance</span> para un
        emprendimiento, durante el transcurso de los mismos aprendí mucho acerca
        de tecnologías como JavaScript, React, Node, Git y GitHub, Firebase, Sass etc.
        <br /> <span>PD: Tambien me gustan los gatos y andar en bici</span>
        <br />
        <br /> <i>Lifelong learner</i>
      </div>

      <div className="about-me-extra">
        <p>Estas son algunas de las tecnologías que más utilizo actualmente, pero me adapto bastante bien y estoy dispuesto a aprender nuevas:</p>

        <ul className="skills">
          {information.skills &&
            information.skills.map((skill, index) => (
              <li key={index} className="skill btn btn-disabled">
                {skill}
              </li>
            ))}
        </ul>

        <div className="about-me">
          Si querés saber más de mí acá te dejo mi cv hecho con HTML, CSS y JS{" "}
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
