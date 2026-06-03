// client/src/components/ServiceCard.jsx
import React from 'react';
import '../styles/ServiceCard.css';

// Simplificamos las props: ya no necesitamos la lista de 'features'
const ServiceCard = ({ icon, title, description, tone = 'manufacturing' }) => {
  const handlePointerMove = ({ currentTarget, clientX, clientY }) => {
    const rect = currentTarget.getBoundingClientRect();

    currentTarget.style.setProperty('--mouse-x', `${clientX - rect.left}px`);
    currentTarget.style.setProperty('--mouse-y', `${clientY - rect.top}px`);
  };

  return (
    <div className={`service-card service-card-tone-${tone}`} onMouseMove={handlePointerMove}>
      <div className="service-card-content">
        <div className="card-icon-wrapper">
          <div className="card-icon">{icon}</div>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
