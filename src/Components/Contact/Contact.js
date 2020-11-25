import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Contact.css';

function Contact () {
    const [contact, setContact] = useState({})

    useEffect(() => {
        axios.get("https://portfolio-react-backend.herokuapp.com/contact")
            .then(
                res => setContact(res.data[0])
            )}, [setContact])
            
    return (
      <div className="contact-container">
        <a
          href="https://cafecito.app/mattdev"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div className="contact-header">
            <button className="btn">Ayúdame a seguir codeando con un cafecito</button>
          </div>
        </a>
        <p className="creative-process">
          Creo soluciones web intuitivas, responsive con estéticas minimalistas,
          centrándome en la funcionalidad y el diseño, me considero una persona
          muy visual que se centra en los detalles y en el código limpio
          brindando una agradable experiencia al usuario
        </p>
        <div className="contact-final">
          <h2>Hablemos!</h2>
          <p>{contact.what_talk}</p>
          <h3>
            <a href="mailto:mattiassalicru@gmail.com">
              mattiassalicru@gmail.com
            </a>
          </h3>
        </div>
        <div className="arrow-top" onClick={() => window.scrollTo(0, 0)}>
          To top
        </div>
      </div>
    );
};

export default Contact;