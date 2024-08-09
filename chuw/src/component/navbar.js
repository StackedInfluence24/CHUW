// src/component/Navbar.js
import React from 'react';
import './navbar.css';

const Navbar = () => {
  const toggleNav = () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('show');
  };

  return (
    <header>
      <div className="navbar-center">
        <div className="navbar-logo">
          <a href="/">CHEW</a>
        </div>
        <div id="navLinks" className="navbar-links">
          <ul>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>
        <div id="navbarIcon" className="navbar-icon" onClick={toggleNav}>
          &#9776;
        </div>
      </div>
    </header>
  );
};

export default Navbar;
