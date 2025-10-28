// client/src/components/FounderProfile.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import '../styles/FounderProfile.css';

// El componente ahora acepta imageUrl
const FounderProfile = ({ name, title, description, quote, imageUrl }) => {
  return (
    <div className="founder-profile">
      {/* Usamos la imageUrl para el fondo del div */}
      <div className="profile-image" style={{ backgroundImage: `url(${imageUrl})` }}>
      </div>
      <div className="profile-content">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-title">{title}</p>
        <p className="profile-description">{description}</p>
        <blockquote className="profile-quote">
          "{quote}"
        </blockquote>
      </div>
    </div>
  );
};

export default FounderProfile;