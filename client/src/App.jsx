// client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ServicesSection from './sections/ServicesSection';
import ProductsSection from './sections/ProductsSection';
import CTASection from './sections/CTASection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer'; // Importa el Footer

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProductsSection />
      <CTASection />
      <AboutSection />
      <ContactSection />
      <Footer /> {/* Añade el Footer al final */}
    </div>
  );
}

export default App;