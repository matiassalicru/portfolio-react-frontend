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
    
    return (
      <div className="about">
        {information.skills && information.skills.map((skill, index) => (
            <p className="skill">{skill}</p>
          ))}
      </div>
    );
};

export default About;