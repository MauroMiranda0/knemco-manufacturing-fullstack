// client/src/components/ServiceCard.jsx
import React from 'react';
import '../styles/ServiceCard.css';

// Simplificamos las props: ya no necesitamos la lista de 'features'
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="card-icon-wrapper">
        <div className="card-icon">{icon}</div>
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default ServiceCard;