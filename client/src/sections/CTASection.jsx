// client/src/sections/CTASection.jsx
import React from 'react';
import { Link } from 'react-scroll';
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
          <Link
                    to="contact" // El ID de la sección a la que queremos ir
                    smooth={true} // Activa la animación de scroll suave
                    duration={2000} // Duración de la animación en milisegundos (2s)
                    offset={-80} // Un pequeño offset para compensar la altura del navbar
                    className="btn btn-primary">Learn About Investing
                  </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;