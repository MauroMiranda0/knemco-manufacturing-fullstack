// client/src/sections/CTASection.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import '../styles/CTASection.css';

const CTASection = () => {
  return (
    <section id="investment" className="cta-section">
      <div className="cta-container">
        {/* Panel Gráfico Izquierdo */}
        <div className="cta-graphic-panel">
          <h2 className="cta-graphic-title">
            Invest in Local
            <br />
            Manufacturing
          </h2>
        </div>

        {/* Panel de Contenido Derecho */}
        <div className="cta-content-panel">
          <h4 className="cta-eyebrow">Community Investment</h4>
          <p className="cta-text">
            Become a part of Grande Prairie's manufacturing future. Invest in a 3D printer
            on our farm and earn passive income while empowering local creators.
          </p>
          {/* Usamos las clases globales de botón */}
          <a href="#contact" className="btn btn-primary">
            Learn About Investing
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;