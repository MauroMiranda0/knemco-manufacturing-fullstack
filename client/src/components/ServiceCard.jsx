// client/src/components/ServiceCard.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import { FiCheck } from 'react-icons/fi'; // Un icono de línea para el check
import '../styles/ServiceCard.css';

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <div className="service-card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <FiCheck className="feature-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {/* --- NUEVO CÓDIGO: Aplicamos las clases globales de botón --- */}
      <a href="#contact" className="btn btn-secondary card-button">
        Learn More <span className="arrow">→</span>
      </a>
      {/* --- FIN DEL NUEVO CÓDIGO --- */}
    </div>
  );
};

export default ServiceCard;