// client/src/sections/ProductsSection.jsx
import React from 'react';
import ProductCard from '../components/ProductCard'; // Reutilizamos el mismo componente de card
import '../styles/ProductsSection.css'; // Reutilizamos los mismos estilos de la sección

// NUEVOS DATOS: Alineados con Knemco y en inglés
const productsData = [
  {
    id: 'cat-fountains',
    title: 'Designer Cat Fountains',
    description: 'Stylish and functional water fountains that encourage your pets to stay hydrated.',
    color: '#42a5f5', // Placeholder color, we can replace with an image later
  },
  {
    id: 'sculptural-lighting',
    title: 'Sculptural Lighting',
    description: 'Artistic lighting fixtures that serve as both a light source and a centerpiece for any room.',
    color: '#ffc107',
  },
  {
    id: 'designer-planters',
    title: 'Modern Designer Planters',
    description: 'Elevate your indoor and outdoor green spaces with our unique, 3D-printed planters.',
    color: '#66bb6a',
  },
  {
    id: 'personalized-gifts',
    title: 'Personalized Gifts',
    description: 'Create one-of-a-kind gifts for any occasion, from custom names to unique designs.',
    color: '#ab47bc',
  },
];

const ProductsSection = () => {
  return (
    // Añadimos un 'id' para que el enlace del Navbar funcione
    <section id="products" className="products-section">
      {/* Título y subtítulo actualizados */}
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
            imageUrl={product.imageUrl} // Podemos añadir URLs de imágenes aquí en el futuro
            color={product.color}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;

// **¿Qué hemos cambiado?**
// *   **Datos Actualizados:** El array `productsData` ahora contiene los productos mencionados en la descripción de la empresa, todo en inglés.
// *   **Título de la Sección:** Hemos añadido un encabezado (`.section-header`) similar al de la sección de servicios para mantener la consistencia, con un nuevo título ("From Our Workshop") y un subtítulo.
// *   **ID de Sección:** Añadimos `id="products"` a la etiqueta `<section>`, lo que permitirá que el enlace "Products" de nuestro Navbar nos lleve directamente aquí cuando hagamos clic.