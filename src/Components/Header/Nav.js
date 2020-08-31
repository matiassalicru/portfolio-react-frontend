import React from 'react';
import './Nav.css';

function Nav() {
    return (
      <div className="nav-container">
        <ul className="nav-list">
          <li
            className="list-item"
            onClick={() => window.scrollTo(0, window.innerHeight)}
          >
            About Me
          </li>
          <li
            className="list-item"
            onClick={() => window.scrollTo(0, window.innerHeight * 2.5)}
          >
            Projects
          </li>
          <li
            className="list-item"
            onClick={() => window.scrollTo(0, window.innerHeight * 3.5)}
          >
            Contact
          </li>
        </ul>
      </div>
    );
}

export default Nav;