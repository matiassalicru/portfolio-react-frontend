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
        <Nav/>
        <h1 className="header-title">&lt;Matias/&gt; </h1>
        <div onClick={goto} className="arrow"></div>
      </div>
    );
};

export default Header;