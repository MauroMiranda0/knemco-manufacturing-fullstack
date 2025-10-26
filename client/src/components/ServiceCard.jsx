// client/src/components/ServiceCard.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Icono para la lista de características
import '../styles/ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, features }) => {
  return (
    <div className="service-card">
      <div className="card-header">
        {Icon && <Icon className="service-icon" />}
        <h3 className="service-title">{title}</h3>
      </div>
      <p className="service-description">{description}</p>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="learn-more-link">
        Learn More <span className="arrow">→</span>
      </a>
    </div>
  );
};

export default ServiceCard;