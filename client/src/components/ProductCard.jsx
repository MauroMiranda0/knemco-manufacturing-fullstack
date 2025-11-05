// client/src/components/ProductCard.jsx
// --- CÓDIGO COMPLETO Y ACTUALIZADO ---
import React from 'react';
import '../styles/ProductCard.css';

// Ahora recibe 'product' y la función 'onViewDetails'
const ProductCard = ({ product, onViewDetails }) => {
  const { title, description, imageUrl, color } = product;

  const backgroundStyle = imageUrl
    ? { backgroundImage: `url(${imageUrl})` }
    : { backgroundColor: color || '#f0f0f0' };

  return (
    <div className="product-card">
      <div className="product-card-image" style={backgroundStyle}>
        {!imageUrl && <span className="placeholder-text">{title}</span>}
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-description">{description}</p>
        {/* Este botón ahora dispara la función del padre */}
        <button onClick={onViewDetails} className="btn btn-secondary card-button">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;