import React from 'react';
import './Nav.css';

function Nav() {
    return (
      <div className="nav-container">
        <ul className="nav-list">
          <li className='list-item'>About</li>
          <li className='list-item'>Projects</li>
          <li className='list-item'>Contact</li>
        </ul>
      </div>
    );
}

export default Nav;