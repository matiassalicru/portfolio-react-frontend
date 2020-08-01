import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./About.css";

function About({scroll}) {
    
  const [information, setInformation] = useState({}); //Con esto hacemos la llamada de los archivos de la API
  
  useEffect(() => {
      axios.get('https://portfolio-react-backend.herokuapp.com/About')
          .then(
              res => setInformation(res.data[0])
          )}, [setInformation]);



    return (
      <div className="about">

        <h1>Introducción de mi mismo</h1>

        <div className='about-me'>
          Hola! Mi nombre es <span>Matias </span> tengo 23 años y me apasiona la tecnología y el diseño UX/UI, aún estoy aprendiendo y recorriendo este camino infinito que tanto me llama la atención, llevo unos cuantos meses aprendiendo a programar <span>(unos 5 aprox)</span> y hasta ahora llegué a hacer varios proyectitos personales que me divirtieron mucho hacerlos, en ellos llegué a utilizar tecnologías como lo son HTML5, CSS3, JavaScript, ReactJS y Node <span>(Este portfolio está creado con estos dos últimos)</span> espero que les guste y siempre es bien recibido el feedback y cualquier cosa que me ayude a llegar a mi meta de ser desarrollador Full-Stack.<br></br> <span>PD: Tambien me gustan los gatos y andar en bici</span>
        </div>

        <div className='about-me-extra'>
          <p>
            Estas son algunas de las tecnologías en las cuales me suelo manejar:
          </p>

          <ul className='skills'>
          {
            information.skills && information.skills.map((skill, index) => (              
              <li key={index} className='skill hvr-grow-shadow'>{skill}</li>
              ))
          }
          </ul>

        </div>

        <div onClick=''/* integrar function scroll */className="arrow"></div>
      </div>
    );
};

export default About;