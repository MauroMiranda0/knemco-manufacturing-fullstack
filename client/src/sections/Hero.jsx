// client/src/sections/Hero.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import '../styles/Hero.css';
// No necesitamos importar la imagen aquí, la manejaremos con CSS

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-image"></div> {/* Contenedor para la imagen de fondo */}
      <div className="video-overlay"></div> {/* Mantenemos la superposición oscura */}

      <div className="hero-content">
        <h1 className="hero-title">
          Manufacture Your Ideas.
          <br />
          Grow With Your Community.
        </h1>
        <p className="hero-description">
          We empower creators and entrepreneurs by making the means of production accessible to everyone.
          Locally designed, prototyped, and manufactured in Grande Prairie.
        </p>
        <a href="#services" className="btn btn-primary">
          Explore the Ecosystem
        </a>
      </div>
    </section>
  );
};

export default Hero;