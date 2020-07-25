import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Portfolio.css";

function Portfolio(){
    const [projects, setProjects] = useState({});
    useEffect(() => {
        axios.get("https://portfolio-react-backend.herokuapp.com/portfolio")
            .then(
                res => setProjects(res.data)
            )}, [setProjects]);
            
    return (
        <>
            <div className='projects-container'>
                {projects.length > 0 && projects.map((project, index) => (
                    <div className='individual-card'>
                        <div className='project-name'>{project.name}</div>
                        <img className='project-image' src={project.image}></img>
                        <p className='project-description'>{project.description}</p>
                        <p className='project-deploy'>Deploy en: {project.deploy}</p>
                        <a target='_blank' className='project-link' href={project.link}>Visitar este proyecto</a>
                    </div>//insertar aquí la estructura de la card de los projectos
                ))}
            </div>
        </>
    );
}

export default Portfolio;