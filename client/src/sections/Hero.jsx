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
          Explore the stories behind our <br /> locally manufactured products
        </h1>
        <p className="hero-description">
          From custom mechanical parts to designer home goods, discover how Knemco is revolutionizing
          local manufacturing in Grande Prairie.
        </p>
        <a href="#get-started" className="hero-button">
          Get Started <span className="arrow">→</span>
        </a>
      </div>
      <div className="hero-image-container">
        {/* Aquí irá tu imagen con la animación */}
        {/* Por ahora, usaremos un div placeholder para el efecto de animación */}
        <div className="hero-animated-image"></div>
        {/* Si ya tienes una imagen:
        <img src={heroImage} alt="Knemco products" className="hero-animated-image" />
        */}
      </div>
    </section>
  );
};

export default Hero;