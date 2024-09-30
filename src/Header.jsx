import React from 'react';
import './editheader.css';  
import { NavLink } from 'react-router-dom';
import kd_icon from './KD_highlight.png'; 

function Header() {
  return (
    <header>
      <span class = "logo"> 
              <img src={kd_icon} alt="KD Logo" className = "image"/>
        </span>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
    </header>
  );
}

export default Header;
