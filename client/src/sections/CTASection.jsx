// client/src/sections/CTASection.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import '../styles/CTASection.css';

const CTASection = () => {
  return (
    <section id="investment" className="cta-section">
      <div className="cta-container">
        {/* Columna Izquierda: Título Principal */}
        <div className="cta-column cta-title-column">
          <h2 className="cta-title">
            OWN A PIECE
            <br />
            OF THE SHOP.
          </h2>
        </div>

        {/* Columna Derecha: Contenido y Botón */}
        <div className="cta-column cta-content-column">
          <h4 className="cta-eyebrow">COMMUNITY INVESTMENT</h4>
          <p className="cta-text">
            Become a part of Grande Prairie's manufacturing
            future. Invest in a 3D printer on our farm and earn
            passive income while empowering local creators.
          </p>
          <a href="#contact" className="btn btn-primary">
            Learn About Investing
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;