// client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ServicesSection from './sections/ServicesSection';
import ProductsSection from './sections/ProductsSection';
import CTASection from './sections/CTASection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection'; // Importa la nueva sección

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProductsSection />
      <CTASection />
      <AboutSection />
      <ContactSection /> {/* Añade la nueva sección */}
      {/* ¡Ahora sí, solo nos queda el Footer! */}
    </div>
  );
}

export default App;