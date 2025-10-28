// client/src/components/ProductCard.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import '../styles/ProductCard.css'; // Estilos específicos para las cards de producto

const ProductCard = ({ title, description, imageUrl, color }) => {
  // Si no se proporciona una imagen, usaremos un div de color
  const backgroundStyle = imageUrl
    ? { backgroundImage: `url(${imageUrl})` }
    : { backgroundColor: color || '#f0f0f0' };

  return (
    <div className="product-card">
      {/* La imagen ahora es el elemento principal visual */}
      <div className="product-card-image" style={backgroundStyle}>
        {!imageUrl && <span className="placeholder-text">{title}</span>}
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-description">{description}</p>
        {/* Usamos el botón secundario global */}
        <a href="#contact" className="btn btn-secondary card-button">
          View Details
        </a>
      </div>
    </div>
  );
};

export default ProductCard;