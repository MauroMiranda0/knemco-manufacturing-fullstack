// client/src/components/ProductCard.jsx
import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onViewDetails }) => {
  const { title, description, imageUrl, expandedHeight, contentHeight } = product;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      event.currentTarget.focus();
    }
  };

  return (
    <article
      className="product-card"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      style={{
        '--product-card-expanded-height': expandedHeight,
        '--product-card-content-height': contentHeight,
      }}
    >
      <div className="product-card-image-box">
        <img className="product-card-image" src={imageUrl} alt={title} />
      </div>
      <div className="product-card-content">
        <h3 className="product-card-title">{title}</h3>
        <p className="product-card-description">{description}</p>
        <button
          type="button"
          className="product-card-action"
          onClick={onViewDetails}
        >
          Read More
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
