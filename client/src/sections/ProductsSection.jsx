// client/src/sections/ProductsSection.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/ProductsSection.css';

// --- NUEVO CÓDIGO: Importamos las imágenes ---
import catFountainImg from '../assets/images/product-cat-fountain.jpg';
import lightingImg from '../assets/images/product-sculptural-lighting.jpg';
import plantersImg from '../assets/images/product-designer-planters.jpg';
import giftsImg from '../assets/images/product-personalized-gifts.jpg';

const productsData = [
  {
    id: 'cat-fountains',
    title: 'Designer Cat Fountains',
    description: 'Stylish and functional water fountains that encourage your pets to stay hydrated.',
    imageUrl: catFountainImg, // Usamos la imagen importada
  },
  {
    id: 'sculptural-lighting',
    title: 'Sculptural Lighting',
    description: 'Artistic lighting fixtures that serve as both a light source and a centerpiece for any room.',
    imageUrl: lightingImg,
  },
  {
    id: 'designer-planters',
    title: 'Modern Designer Planters',
    description: 'Elevate your indoor and outdoor green spaces with our unique, 3D-printed planters.',
    imageUrl: plantersImg,
  },
  {
    id: 'personalized-gifts',
    title: 'Personalized Gifts',
    description: 'Create one-of-a-kind gifts for any occasion, from custom names to unique designs.',
    imageUrl: giftsImg,
  },
];
// --- FIN DEL NUEVO CÓDIGO ---

const ProductsSection = () => {
  return (
    <section id="products" className="products-section">
      <div className="section-header">
        <h2 className="section-title">From Our Workshop</h2>
        <p className="section-subtitle">
          Discover a selection of our in-house designed products, all locally manufactured in Grande Prairie.
        </p>
      </div>
      <div className="products-grid">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            imageUrl={product.imageUrl}
            // La prop 'color' ya no es necesaria si todas las cards tienen imagen
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;