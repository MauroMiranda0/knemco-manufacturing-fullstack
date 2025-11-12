// client/src/sections/Hero.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import { Link } from 'react-scroll';
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
          Let's build it together.
        </h1>
        <p className="hero-description">
          Your vision, made real right here in Grande Prairie. We're your partners in creation.
          We provide the tools, the expertise, and the community support to turn your idea
          into a product you can hold and your neighbours can buy.
        </p>
        <Link
          to="services" // El ID de la sección a la que queremos ir
          smooth={true} // Activa la animación de scroll suave
          duration={2000} // Duración de la animación en milisegundos (0.8s)
          offset={-80} // Un pequeño offset para compensar la altura del navbar
          className="btn btn-primary">Explore the Ecosystem
        </Link>
      </div>
    </section>
  );
};

export default Hero;