// client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero'; // Importa el componente Hero
import ProductsSection from './sections/ProductsSection'; // Importa la nueva sección

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsSection /> {/* Renderiza la sección de productos */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        {/* Contenido de prueba */}
        <h3>Aquí irán las futuras secciones.</h3>
      </main>
    </div>
  );
}

export default App;