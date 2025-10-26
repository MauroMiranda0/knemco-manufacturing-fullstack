// client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero'; // Importa el componente Hero
import ProductsSection from './sections/ProductsSection'; // Importa la nueva sección
import WorksSection from './sections/WorksSection'; // Importa la nueva sección

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsSection /> {/* Renderiza la sección de productos */}
      <WorksSection /> {/* Renderiza la sección de works */}
    </div>
  );
}

export default App;