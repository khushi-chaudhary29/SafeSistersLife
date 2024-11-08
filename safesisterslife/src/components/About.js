import React from 'react';
import '../styles/About.css';
import aboutImage from '../image1/about.jpg'; // Import your image

const About = () => {
  return (
    <div className="about-section">
      <div className="about-image">
        <img src={aboutImage} alt="About Safe Sisters Life" />
      </div>
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          Safe Sister Life is dedicated to creating a safer environment for women. We
          provide tools, resources, and support to help women feel empowered and secure
          in their daily lives.
        </p>
      </div>
    </div>
  );
};

export default About;

