// client/src/sections/ProductsSection.jsx
// --- CÓDIGO COMPLETO Y ACTUALIZADO ---
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';
import '../styles/ProductsSection.css';
import '../styles/ProductDetail.css';

// --- NUEVO CÓDIGO: Importamos Swiper y sus estilos ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// --- FIN DEL NUEVO CÓDIGO ---

import catFountainImg from '../assets/images/product-cat-fountain.jpg';
import lightingImg from '../assets/images/product-sculptural-lighting.jpg';
import plantersImg from '../assets/images/product-designer-planters.jpg';
import giftsImg from '../assets/images/product-personalized-gifts.jpg';

const productsData = [
  { id: 'cat-fountains', title: 'Pet Accessories', description: "Thoughtful design and craftsmanship for our furry friends.", imageUrl: catFountainImg, bgLetter: 'P' },
  { id: 'sculptural-lighting', title: 'Sculptural Lighting', description: 'Functional works of art designed to transform your space.', imageUrl: lightingImg, bgLetter: 'L' },
  { id: 'designer-planters', title: 'Designer Planters', description: 'Bring nature into your home with style and modern aesthetics.', imageUrl: plantersImg, bgLetter: 'D' },
  { id: 'personalized-gifts', title: 'Personalized Gifts', description: "Create a truly unique and memorable gift for any occasion.", imageUrl: giftsImg, bgLetter: 'G' },
  // Podemos añadir más productos para probar el slider
  { id: 'more-lighting', title: 'Ambient Lighting', description: 'Set the perfect mood with our custom ambient lights.', imageUrl: lightingImg, bgLetter: 'A' },
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

      {/* --- NUEVO CÓDIGO: Implementación del Slider --- */}
      <div className="product-slider-container">
        <Swiper
          modules={[Pagination, Navigation]} // Módulos que usaremos
          spaceBetween={30} // Espacio entre slides
          slidesPerView={1} // Slides visibles en móvil
          navigation // Activa las flechas de navegación
          pagination={{ clickable: true }} // Activa la paginación con puntos
          breakpoints={{
            // Responsive: cuántos slides mostrar según el ancho de la pantalla
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {productsData.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard
                product={product}
                onViewDetails={() => handleOpenModal(product)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* --- FIN DEL NUEVO CÓDIGO --- */}


      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProduct && (
          <div className="product-detail">
            <img src={selectedProduct.imageUrl} alt={selectedProduct.title} className="product-detail-image" />
            <h2 className="product-detail-title">{selectedProduct.title}</h2>
            <p className="product-detail-description">{selectedProduct.description}</p>
            <p>(Aquí podría ir más información, como precio, materiales, etc.)</p>
            <a href="#contact" className="btn btn-primary">Inquire About This Product</a>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default ProductsSection;