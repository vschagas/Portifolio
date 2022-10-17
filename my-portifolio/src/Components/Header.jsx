import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  const links = ["Home", "About", "Projects", "Skills", "Contacts"];
  return (
    <div className='header-container'>
      <div className='name'><h2><span>V</span>ALMIR<span> C</span>HAGAS</h2></div>
      <nav className='nav-container'>
        <ul className='links-container'>
          {links.map((link) => (
            <li key={link}>
              {link}
            </li>
          ))}
          <li>
            <label htmlFor="">
              <input type="checkbox" name="" id="" onchange="changeTheme" />
            </label>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header