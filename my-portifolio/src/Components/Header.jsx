import React from 'react'

const Header = () => {
  const links = ["Home", "About", "Projects", "Skills", "Contacts"];
  return (
    <div className='header-container'>
      <div className='name'><h2>Valmir Chagas</h2></div>
      <nav>
        <ul className='links-container'>
          {links.map((link) => <li>{link}</li>)}
        </ul>
      </nav>
    </div>
  )
}

export default Header