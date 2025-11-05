// client/src/sections/ProductsSection.jsx
// --- CÓDIGO COMPLETO Y ACTUALIZADO ---
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal'; // Importamos el nuevo Modal
import '../styles/ProductsSection.css';
import '../styles/ProductDetail.css'; // Crearemos este archivo para el contenido del modal

import catFountainImg from '../assets/images/product-cat-fountain.jpg';
import lightingImg from '../assets/images/product-sculptural-lighting.jpg';
import plantersImg from '../assets/images/product-designer-planters.jpg';
import giftsImg from '../assets/images/product-personalized-gifts.jpg';

const productsData = [
  // ... (los datos de los productos se mantienen igual) ...
  {
    id: 'cat-fountains',
    title: 'Thoughtful Pet Accessories',
    description: "Every item reflects our commitment to quality materials, thoughtful design, and craftsmanship. Our pet accessories are made with love for our furry friends.",
    imageUrl: catFountainImg,
  },
  {
    id: 'sculptural-lighting',
    title: 'Sculptural Lighting',
    description: 'More than just a light source, each piece is a functional work of art designed to transform your space.',
    imageUrl: lightingImg,
  },
  {
    id: 'designer-planters',
    title: 'Modern Designer Planters',
    description: 'Bring nature into your home with style. Our planters are designed to complement your plants and your decor.',
    imageUrl: plantersImg,
  },
  {
    id: 'personalized-gifts',
    title: 'Personalized Gifts',
    description: "Create a truly unique and memorable gift. We work with you to bring your personal touch to life.",
    imageUrl: giftsImg,
  },
];

const ProductsSection = () => {
  // --- LÓGICA DEL MODAL ---
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
  // --- FIN DE LA LÓGICA DEL MODAL ---

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
            product={product} // Pasamos el objeto de producto completo
            onViewDetails={() => handleOpenModal(product)} // Pasamos la función para abrir el modal
          />
        ))}
      </div>

      {/* RENDERIZADO DEL MODAL */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProduct && (
          <div className="product-detail">
            <img src={selectedProduct.imageUrl} alt={selectedProduct.title} className="product-detail-image" />
            <h2 className="product-detail-title">{selectedProduct.title}</h2>
            <p className="product-detail-description">{selectedProduct.description}</p>
            <p> (Aquí podría ir más información, como precio, materiales, etc.) </p>
            {/* <a href="#services" className="btn btn-primary">Inquire About This Product</a> */}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProductsSection;