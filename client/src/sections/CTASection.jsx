// client/src/sections/CTASection.jsx
import React from 'react';
import '../styles/CTASection.css';

const CTASection = () => {
  return (
    // Añadimos el id 'investment' para el enlace del Navbar
    <section id="investment" className="cta-section">
      <div className="cta-container">
        {/* Panel Gráfico Izquierdo */}
        <div className="cta-graphic-panel">
          <h2 className="cta-graphic-title">
            OWN A PIECE OF THE FACTORY
          </h2>
        </div>

        {/* Panel de Contenido Derecho */}
        <div className="cta-content-panel">
          <h4 className="cta-eyebrow">GET INVOLVED</h4>
          <p className="cta-text">
            Interested in learning more about our Community Investment model?
            Please contact us at: <a href="mailto:info@knemcomfg.com" className="cta-email-link">info@knemcomfg.com</a>
          </p>
          <a href="#subscribe" className="cta-button">
            SUBSCRIBE TO OUR NEWSLETTER
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;