// client/src/sections/ProductsSection.jsx
// --- CÓDIGO COMPLETO Y ACTUALIZADO ---
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import '../styles/ProductsSection.css';
import '../styles/ProductDetail.css';

import catFountainImg from '../assets/images/product-cat-fountain.jpg';
import lightingImg from '../assets/images/product-sculptural-lighting.jpg';
import plantersImg from '../assets/images/product-designer-planters.jpg';
import giftsImg from '../assets/images/product-personalized-gifts.jpg';

// --- NUEVO DATO: 'bgLetter' para la letra de fondo ---
const productsData = [
  {
    id: 'cat-fountains',
    title: 'Pet Accessories', // Título más corto para el nuevo diseño
    description: "Thoughtful design and craftsmanship for our furry friends.",
    imageUrl: catFountainImg,
    bgLetter: 'P', // Letra para 'Pet'
  },
  {
    id: 'sculptural-lighting',
    title: 'Sculptural Lighting',
    description: 'Functional works of art designed to transform your space.',
    imageUrl: lightingImg,
    bgLetter: 'L', // Letra para 'Lighting'
  },
  {
    id: 'designer-planters',
    title: 'Designer Planters',
    description: 'Bring nature into your home with style and modern aesthetics.',
    imageUrl: plantersImg,
    bgLetter: 'D', // Letra para 'Designer'
  },
  {
    id: 'personalized-gifts',
    title: 'Personalized Gifts',
    description: "Create a truly unique and memorable gift for any occasion.",
    imageUrl: giftsImg,
    bgLetter: 'G', // Letra para 'Gifts'
  },
];

const ProductsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="products-section">
      <div className="section-header">
        <h2 className="section-title">From GP, To Your Home.</h2>
        <p className="section-subtitle">
          Meet the products born in our community workshop. This is our own line of goods, designed,
          tested, and manufactured just down the road.
        </p>
      </div>
      <div className="products-grid">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={() => handleOpenModal(product)}
          />
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProduct && (
          <div className="product-detail">
            <img src={selectedProduct.imageUrl} alt={selectedProduct.title} className="product-detail-image" />
            <h2 className="product-detail-title">{selectedProduct.title}</h2>
            <p className="product-detail-description">{selectedProduct.description}</p>
            <p> (Aquí podría ir más información, como precio, materiales, etc.) </p>
            <a href="#contact" className="btn btn-primary">Inquire About This Product</a>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProductsSection;
