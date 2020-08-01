import React from 'react';
import './Nav.css';

function Nav({scroll}) {
  console.log(scroll)
    return (
      <div className="nav-container">
        <ul className="nav-list">
          <li className='list-item' onClick={scroll}>About</li>
          <li className='list-item'>Projects</li>
          <li className='list-item'>Contact</li>
        </ul>
      </div>
    );
}

export default Nav;