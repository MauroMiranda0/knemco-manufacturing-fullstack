// client/src/components/ProductCard.jsx
import React from 'react';
import '../styles/ProductCard.css'; // Estilos específicos para las cards

const ProductCard = ({ title, description, imageUrl, color }) => {
  // Si no se proporciona una imagen, usaremos un div de color
  const backgroundStyle = imageUrl
    ? { backgroundImage: `url(${imageUrl})` }
    : { backgroundColor: color || '#f0f0f0' }; // Color por defecto si no se da ninguno

  return (
    <div className="product-card">
      <div className="card-image-placeholder" style={backgroundStyle}>
        {!imageUrl && <span className="card-placeholder-text">{title}</span>}
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;