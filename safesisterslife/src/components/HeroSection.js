import React from 'react';
import '../styles/HeroSection.css';
import heroImage from '../image1/hero1.jpg';

const HeroSection = () => {
  return (
    <>
    <div className="hero-section">
      <div className="hero-content">
        <h1>Empowering Women, Ensuring Safety</h1>
        <p>
          Safe Sister Life is here to create a safer environment for women everywhere.
          Join us in making a difference and providing safety solutions for a better world.
        </p>
        <button className="hero-button">Learn More</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Empowered women" />
      </div>
    </div>
    </>
  );
};

export default HeroSection;

