import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./About.css";

function About() {
    
  const [information, setInformation] = useState({}); //Con esto hacemos la llamada de los archivos de la API
  
  useEffect(() => {
      axios.get('https://portfolio-react-backend.herokuapp.com/About')
          .then(
              res => setInformation(res.data[0])
          )}, [setInformation]);

  function goto () {
    return window.scrollTo(0, window.innerHeight * 2);
  }

    return (
        <div className="about">
          <h1>Introducción de mi mismo</h1>

          <div className="about-me">
            Hola! Mi nombre es <span>Matias </span> tengo 23 años y soy un
            apasionado por la tecnología, aún estoy aprendiendo y recorriendo
            este camino que tanto me llama la atención, llevo varios meses
            aprendiendo a programar <span>(unos 5 aprox, desde febrero 2020)</span> en ese tiempo
            hice algunos proyectos personales que me fueron divertidos de crear,
            en ellos llegué a utilizar tecnologías como HTML5, CSS3, JavaScript,
            ReactJS y Node, siempre es bien recibido el feedback y cualquier
            cosa que me ayude a llegar a mi meta de ser desarrollador
            Full-Stack.<br></br>{" "}
            <span>PD: Tambien me gustan los gatos y andar en bici</span>
          </div>

          <div className="about-me-extra">
            <p>
              Estas son algunas de las tecnologías en las cuales me suelo
              manejar:
            </p>

            <ul className="skills">
              {information.skills &&
                information.skills.map((skill, index) => (
                  <li key={index} className="skill hvr-grow-shadow">
                    {skill}
                  </li>
                ))}
            </ul>

            <div className='about-me'>
              Si querés saber más de mí acá te dejo mi cv hecho en HTML y CSS{" "}
              <span>
                <a href={information.cv} target='_blank' rel='noopener noreferrer'>(ver cv)</a>
              </span>
            </div>
          </div>

          <div
            onClick={goto}
            className="arrow"
          ></div>
        </div>
    );
};

export default About;