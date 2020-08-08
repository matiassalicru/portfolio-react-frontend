import React from 'react';
import Nav from './Nav';
import './Header.css';

function Header () {

    function goto() {
        const height = window.innerHeight;
        window.scrollTo(0, height) // Hace un scroll de la altura del viewport de quien lo está viendo.
    }

    return (
        <div className="header-container">
          <Nav scroll={goto} />
          <h1 className="header-title"> &lt;Matias/&gt; </h1>
          <ul className='social'>
              <li><a href='https://www.instagram.com/matiassalicru/' className='icon-social-instagram'></a></li>
              <li><a href='https://www.twitter.com/matiassalicru' className='icon-social-twitter'></a></li>
              <li><a href='https://www.github.com/matiassalicru' className='icon-social-github'></a></li>
          </ul>
           <i className="arrow down" onClick={goto}></i>
        </div>
    );
};

export default Header;