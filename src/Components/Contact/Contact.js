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
    return(
        <>
            {contact.what_talk}
        </>
    );
};

export default Contact;