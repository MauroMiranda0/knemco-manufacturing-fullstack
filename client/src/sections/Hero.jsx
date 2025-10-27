// client/src/sections/Hero.jsx
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    // El id 'home' es útil para un enlace "Home" o para volver arriba
    <section id="home" className="hero-section">
      {/* Contenedor del video de fondo */}
      <div className="hero-video-container">
        <video
          src="/videos/hero-background.mp4" // Ruta al video en la carpeta /public
          autoPlay
          loop
          muted
          playsInline // Importante para la reproducción en móviles
          className="hero-video"
        />
        <div className="video-overlay"></div> {/* Superposición oscura */}
      </div>

      {/* Contenido centrado */}
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
        {/* Usaremos una clase 'btn' y 'btn-primary' para el botón */}
        <a href="#services" className="btn btn-primary">
          Explore the Ecosystem
        </a>
      </div>
    </section>
  );
};

export default Hero;

// *   **Video Tag:** Hemos añadido el tag `<video>` con los atributos `autoPlay`, `loop` y `muted` para que se reproduzca automáticamente en bucle y sin sonido.
// *   **Video Overlay:** El `div` con la clase `video-overlay` será nuestro filtro oscuro para asegurar la legibilidad del texto.
// *   **Contenido Actualizado:** Los textos ahora reflejan la misión de Knemco.
// *   **Clases de Botón:** Hemos añadido las clases `btn` y `btn-primary`. Crearemos estilos globales para estas clases, ya que usaremos este botón en más lugares.