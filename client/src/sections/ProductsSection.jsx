// client/src/sections/ProductsSection.jsx
import React, { useEffect, useState } from 'react';
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
  { id: 'cat-fountains', title: 'Pet accessories', description: "Thoughtful design and craftsmanship for our furry friends.", imageUrl: catFountainImg, expandedHeight: '442px', contentHeight: '212px' },
  { id: 'sculptural-lighting', title: 'Sculptural lighting', description: 'Functional works of art designed to transform your space.', imageUrl: lightingImg, expandedHeight: '442px', contentHeight: '212px' },
  { id: 'designer-planters', title: 'Designer planters', description: 'Bring nature into your home with style and modern aesthetics.', imageUrl: plantersImg, expandedHeight: '442px', contentHeight: '212px' },
  { id: 'personalized-gifts', title: 'Personalized gifts', description: "Create a truly unique and memorable gift for any occasion.", imageUrl: giftsImg, expandedHeight: '442px', contentHeight: '212px' },
];

const getProductsPerPage = (width) => {
  if (width < 768) {
    return 1;
  }

  if (width < 1280) {
    return 2;
  }

  return 3;
};

const ProductsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productsPerPage, setProductsPerPage] = useState(() => getProductsPerPage(typeof window === 'undefined' ? 1280 : window.innerWidth));
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setProductsPerPage(getProductsPerPage(window.innerWidth));
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(productsData.length / productsPerPage);
  const visibleProducts = productsData.slice(
    currentPage * productsPerPage,
    currentPage * productsPerPage + productsPerPage,
  );

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, Math.max(totalPages - 1, 0)));
  }, [totalPages]);

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
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={() => handleOpenModal(product)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="products-pagination" aria-label="Products pagination">
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <button
              key={pageIndex}
              type="button"
              className={`products-pagination-dot ${pageIndex === currentPage ? 'is-active' : ''}`}
              aria-label={`Go to products page ${pageIndex + 1}`}
              aria-pressed={pageIndex === currentPage}
              onClick={() => setCurrentPage(pageIndex)}
            />
          ))}
        </div>
      )}

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
