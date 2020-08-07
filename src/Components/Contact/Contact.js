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
        <div className="contact-header">
          <p>Turning coffee into code</p>
        </div>
        <p className="creative-process">{contact.creative_process}</p>
        <div className='contact-final'>
            <h2>Hablemos!</h2>
            <p>{contact.what_talk}</p>
            <h3><a href='mailto:mattiassalicru@gmail.com'>{contact.email}</a></h3>
        </div>
        <div className='arrow-top' onClick={() => window.scrollTo(0,0)}>To top</div>
      </div>
    );
};

export default Contact;