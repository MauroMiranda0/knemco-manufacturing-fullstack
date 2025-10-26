// client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import WorksSection from './sections/WorksSection';
import ProductsSection from './sections/ProductsSection';
// Más adelante importaremos los nuevos componentes aquí

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WorksSection /> {/* Lo renombraremos a "Servicios" */}
      <ProductsSection /> {/* Lo renombraremos a "Productos Destacados" */}
      {/* Aquí irán las nuevas secciones: Inversión, Fundadores, Footer */}
    </div>
  );
}

export default App;