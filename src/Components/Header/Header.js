import React from 'react';
import Nav from './Nav';
import './Header.css';
import { Icon } from "@iconify/react";
import socialGithub from "@iconify/icons-simple-line-icons/social-github";
import socialLinkedin from "@iconify/icons-simple-line-icons/social-linkedin";
import socialTwitter from "@iconify/icons-simple-line-icons/social-twitter";



function Header () {

    function goto() {
        const height = window.innerHeight;
        window.scrollTo(0, height) // Hace un scroll de la altura del viewport de quien lo está viendo.
    }

    return (
      <div className="header-container ">
        <Nav scroll={goto} />
        <h1 className="header-title ">
          &lt;Matias/&gt;
        </h1>
        <ul className="social">
          <li>
            <a
              href="https://www.github.com/matiassalicru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={socialGithub} className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/matiassalicru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={socialTwitter} className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/matias-salicru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={socialLinkedin} className="icon" />
            </a>
          </li>
        </ul>
        <i className="arrow down" onClick={goto}></i>
      </div>
    );
};

export default Header;