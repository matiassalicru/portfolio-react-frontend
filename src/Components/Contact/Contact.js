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