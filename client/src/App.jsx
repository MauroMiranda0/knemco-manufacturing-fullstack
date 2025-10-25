// client/src/App.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Importa el componente Navbar
// Importar estilos generales más adelante

function App() {
  return (
    <div>
      <Navbar /> {/* Renderiza el componente Navbar */}
      {/* El contenido de tu landing page irá aquí, debajo del Navbar */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Bienvenido a KNEMCO</h1>
        <p>Tu futuro contenido de landing page comenzará aquí.</p>
        <p>Intenta redimensionar la ventana para ver el comportamiento responsive del Navbar.</p>
      </main>
    </div>
  );
}

export default App;