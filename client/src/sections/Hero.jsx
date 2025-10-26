// client/src/sections/Hero.jsx
import React from 'react';
import '../styles/Hero.css'; // Importa el CSS específico para la sección Hero
// Importa tu imagen aquí. Por ahora, puedes usar una imagen placeholder o dejarlo vacío.
// Ejemplo: import heroImage from '../assets/hero-placeholder.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Your Ideas, <br /> Made in Grande Prairie.
        </h1>
        <p className="hero-description">
          We are a 3D printing and design startup revitalizing local manufacturing
          through a collaborative, accessible, and scalable model.
        </p>
        <a href="#services" className="hero-button">
          Explore Our Services <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;