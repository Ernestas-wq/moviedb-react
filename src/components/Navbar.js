import React from 'react';
import { links } from '../data/links';
import { Link } from 'react-router-dom';
import { GiMaterialsScience } from 'react-icons/gi';
import { GoThreeBars } from 'react-icons/go';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';
const Navbar = () => {
  const { toggleSidebar, isSidebarOpen, isHomeOpen, cart } = useGlobalContext();

  return (
    <nav className="navbar" style={{ backgroundColor: isHomeOpen ? '' : '#282c35' }}>
      <h3 className="navbar__logo">
        Movie<span>DB</span> <GiMaterialsScience />
      </h3>
      <Link to="/cart" className="navbar__cart">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
        </svg>
        <p>{cart.amount}</p>
      </Link>

      <button className="navbar__toggle" onClick={toggleSidebar}>
        {isSidebarOpen ? <FaTimes /> : <GoThreeBars />}
      </button>
      <ul className={isSidebarOpen ? 'navbar__menu navbar__menu--active' : 'navbar__menu'}>
        {links.map((link, index) => {
          const { url, title } = link;
          return (
            <li key={index}>
              <Link to={url} className="navbar__link" onClick={toggleSidebar}>
                {title}
              </Link>
            </li>
          );
        })}
        <li>
          <a href="https://ernestas-portfolio.netlify.app/">Portfolio</a>
        </li>
      </ul>
      <Link to="/signup" className="navbar__signup">
        Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;
