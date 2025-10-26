// client/src/components/ServiceCard.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Importamos el ícono de check
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
            <FaCheckCircle className="feature-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="learn-more-button">
        Learn More <span className="arrow">→</span>
      </a>
    </div>
  );
};

export default ServiceCard;