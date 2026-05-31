// client/src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import ServicesSection from './sections/ServicesSection';
import ProductsSection from './sections/ProductsSection';
import CTASection from './sections/CTASection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';
import { initializeLandingAnalytics } from './utils/conversionEvents';
import Footer from './components/Footer'; // Importa el Footer

function App() {
  useEffect(() => initializeLandingAnalytics(), []);

  return (
    <div className="app-shell" id="primary-conversion-flow">
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProductsSection />
      <CTASection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
