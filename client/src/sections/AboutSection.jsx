// client/src/sections/AboutSection.jsx
import React from 'react';
import '../styles/AboutSection.css';

import leonardoImg from '../assets/images/founder-leonardo-yanez.jpg';
import mariuszImg from '../assets/images/founder-mariusz-szczepan.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Columna de Imágenes */}
        <div className="about-images-column">
          <div className="about-image-wrapper">
            <img src={leonardoImg} alt="Leonardo Yanez, Co-founder of Knemco" className="about-image" />
            <div className="image-caption">Leonardo Yañez</div>
          </div>
          <div className="about-image-wrapper">
            <img src={mariuszImg} alt="Mariusz Szczepan, Co-founder of Knemco" className="about-image" />
            <div className="image-caption">Mariusz Szczepan</div>
          </div>
        </div>

        {/* Columna de Contenido */}
        <div className="about-content-column">
          <h2 className="section-title">Our Team</h2>
          <p className="about-text">
            The soul of Knemco is the powerful alliance between Leonardo's analytical mind and Mariusz's
            artistic spirit. Leonardo, a Field Engineer, brings a disciplined approach to manufacturing,
            ensuring every product is robust and reliable. Mariusz, a Dental Technician, blends artistic
            precision with a natural gift for connection, ensuring every client feels heard and valued.
            Together, they fuse technical rigor with human warmth, creating a trusted partnership
            dedicated to bringing your ideas to life with integrity and care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;