import React, { useState } from 'react';
import "../styles/navbar.css";
import logoNav from '../image1/logo.jpg';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="navbar container">
        <div className="nav-logo">
          <img src={logoNav} alt="Safe Sister Life Logo" />
          <div className="menu-toggle" onClick={toggleMenu}>☰</div>
        </div>
        <div className={`nav-links ${isActive ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#mission">Our Mission</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
