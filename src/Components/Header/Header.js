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
              <li className=''><a href='#' className='icon-social-instagram'></a></li>
              <li className='icon-social-twitter'></li>
              <li className='icon-social-github'></li>
          </ul>
           <i className="arrow down" onClick={goto}></i>
        </div>
    );
};

export default Header;