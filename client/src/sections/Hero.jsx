// client/src/sections/Hero.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import '../styles/Hero.css';
// Mantenemos la estructura actual, solo cambiamos el contenido

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background-image"></div>
      <div className="video-overlay"></div>
      <div className="hero-content">
        {/* --- NUEVO CONTENIDO --- */}
        <h1 className="hero-title">
          Let's Build It Together.
        </h1>
        <p className="hero-description">
          Your vision, made real right here in Grande Prairie. We're your partners in creation.
          We provide the tools, the expertise, and the community support to turn your idea
          into a product you can hold and your neighbours can buy.
        </p>
        {/* --- FIN DEL NUEVO CONTENIDO --- */}
        <a href="#services" className="btn btn-primary">
          Explore the Ecosystem
        </a>
      </div>
    </section>
  );
};

export default Hero;