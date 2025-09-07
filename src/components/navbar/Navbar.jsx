import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img
          src={logo}
          alt="Logo"
          className="navbar-logo"
          onClick={(e) => scrollToSection(e, 'hero')} // Scroll to top/hero
        />
        <ul className="navbar-links">
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#workexp" onClick={(e) => scrollToSection(e, 'workexp')}>
              Work Exp
            </a>
          </li>
          <li>
            <a href="#contactme" onClick={(e) => scrollToSection(e, 'contactme')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;