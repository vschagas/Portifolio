import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Header = () => {
  const links = ["Home", "About", "Projects", "Skills", "Contacts"];
  return (
    <div className='header-container'>
      <div className='name'>vschagas</div>
      <nav className='nav-container'>
        <ul className='links-container'>
          {links.map((link) => (
            <li key={link}>
              <NavLink>
                
              </NavLink>
            </li>
          ))}
          <li>
            <label htmlFor="">
              <input type="checkbox" name="" id="" />
            </label>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header