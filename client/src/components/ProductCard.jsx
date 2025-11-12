// client/src/components/ProductCard.jsx
import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onViewDetails }) => {
  // Extraemos las propiedades del objeto product
  const { title, description, imageUrl, bgLetter } = product;

  // El estilo de la imagen de fondo se aplicará al contenedor principal
  const cardStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    // El evento onClick ahora está en toda la tarjeta
    <div className="product-card" style={cardStyle} onClick={onViewDetails}>
      <div className="card-overlay"></div> {/* Capa de gradiente */}
      <span className="card-bg-letter">{bgLetter}</span>
      <div className="product-card-content">
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;