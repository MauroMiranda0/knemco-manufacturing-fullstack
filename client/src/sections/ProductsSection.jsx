// client/src/sections/ProductsSection.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/ProductsSection.css';

import catFountainImg from '../assets/images/product-cat-fountain.jpg';
import lightingImg from '../assets/images/product-sculptural-lighting.jpg';
import plantersImg from '../assets/images/product-designer-planters.jpg';
import giftsImg from '../assets/images/product-personalized-gifts.jpg';

// --- NUEVO CONTENIDO DEL ARQUETIPO MENTOR ---
const productsData = [
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
// --- FIN DEL NUEVO CONTENIDO ---

const ProductsSection = () => {
  return (
    <section id="products" className="products-section">
      <div className="section-header">
        {/* --- NUEVO TÍTULO Y SUBTÍTULO --- */}
        <h2 className="section-title">From GP, To Your Home.</h2>
        <p className="section-subtitle">
          Meet the products born in our community workshop. This is our own line of goods, designed,
          tested, and manufactured just down the road.
        </p>
        {/* --- FIN DEL NUEVO TÍTULO Y SUBTÍTULO --- */}
      </div>
      <div className="products-grid">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;