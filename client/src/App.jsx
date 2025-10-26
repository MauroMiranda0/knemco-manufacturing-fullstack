// client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ServicesSection from './sections/ServicesSection';
import ProductsSection from './sections/ProductsSection';
import CTASection from './sections/CTASection'; // Importa la nueva sección CTA

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProductsSection />
      <CTASection /> {/* Añade la nueva sección */}
      {/* Aquí irán las secciones restantes: Fundadores, Footer */}
    </div>
  );
}

export default App;