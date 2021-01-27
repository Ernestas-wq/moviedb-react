import React, { useState } from 'react';
import { links } from '../data/links';
import { GiMaterialsScience } from 'react-icons/gi';
import { GoThreeBars } from 'react-icons/go';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Navbar = () => {
  const { toggleSidebar, isSidebarOpen, isHomeOpen } = useGlobalContext();

  return (
    <nav className="navbar" style={{ backgroundColor: isHomeOpen ? '' : '#282c35' }}>
      <h3 className="navbar__logo">
        Movie<span>DB</span> <GiMaterialsScience />
      </h3>
      <button className="navbar__toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <GoThreeBars />}
      </button>
      <ul className={isSidebarOpen ? 'navbar__menu navbar__menu--active' : 'navbar__menu'}>
        {links.map((link, index) => {
          const { url, title } = link;
          return (
            <li key={index}>
              <a href={url} className="navbar__link">
                {title}
              </a>
            </li>
          );
        })}
      </ul>
      <button className="navbar__signup">Sign up</button>
    </nav>
  );
};

export default Navbar;
