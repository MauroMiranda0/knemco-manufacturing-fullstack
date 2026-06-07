// client/src/sections/ProductsSection.jsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import { trackCtaClickContact } from '../utils/conversionEvents';
import '../styles/ProductsSection.css';
import '../styles/ProductDetail.css';
import catFountainImg from '../assets/images/product-cat-fountain.png'; // Adjust the path according to your project structure
import lightingImg from '../assets/images/product-sculptural-lighting.png'; // Import lighting image
import plantersImg from '../assets/images/product-designer-planters.png'; // Import planters image
import giftsImg from '../assets/images/product-personalized-gifts.png'; // Import gifts image

const productsData = [
  { id: 'cat-fountains', title: 'Pet accessories', description: "Thoughtful design and craftsmanship for our furry friends.", imageUrl: catFountainImg},
  { id: 'sculptural-lighting', title: 'Sculptural lighting', description: 'Functional works of art designed to transform your space.', imageUrl: lightingImg},
  { id: 'designer-planters', title: 'Designer planters', description: 'Bring nature into your home with style and modern aesthetics.', imageUrl: plantersImg},
  { id: 'personalized-gifts', title: 'Personalized gifts', description: "Create a truly unique and memorable gift for any occasion.", imageUrl: giftsImg},
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
        <h2 className="section-title">From GP, to your home.</h2>
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
            <p>(Aquí podría ir más información, como precio, materiales, etc.)</p>
             <a href="#contact" className="btn btn-primary" onClick={() => trackCtaClickContact('product_modal_cta')}>Inquire About This Product</a>
           </div>
         )}
       </Modal>
    </section>
  );
};

export default ProductsSection;
