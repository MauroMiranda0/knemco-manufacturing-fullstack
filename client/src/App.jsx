// client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ServicesSection from './sections/ServicesSection'; // Importa la NUEVA sección
import ProductsSection from './sections/ProductsSection';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection /> {/* Usa la NUEVA sección */}
      <ProductsSection />
      {/* Aquí irán las futuras secciones */}
    </div>
  );
}

export default App;