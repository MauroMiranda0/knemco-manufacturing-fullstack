// client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero'; // Importa el componente Hero

function App() {
  return (
    <div>
      <Navbar />
      <Hero /> {/* Renderiza el componente Hero */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        {/* Contenido de prueba de App.jsx que ahora está debajo del Hero */}
        <h2>El resto de tu contenido de landing page</h2>
        <p>Aquí es donde las siguientes secciones irán.</p>
      </main>
    </div>
  );
}

export default App;