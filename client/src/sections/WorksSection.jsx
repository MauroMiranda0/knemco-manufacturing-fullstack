// client/src/sections/WorksSection.jsx
import React, { useState } from 'react';
import '../styles/WorksSection.css'; // Estilos para esta sección
import { FaFire, FaTools, FaLaptopCode, FaBolt, FaDraftingCompass, FaCube } from 'react-icons/fa'; // Iconos de ejemplo

// Datos de las características/servicios
const worksData = [
  {
    id: 1,
    title: 'Laser Cutters & 3D Printers',
    icon: FaFire,
    imageUrl: 'https://images.unsplash.com/photo-1611175643918-a80a2245234c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    title: 'Kiln for Ceramics & Glass',
    icon: FaDraftingCompass,
    imageUrl: 'https://images.unsplash.com/photo-1565193563134-396b6105747c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 3,
    title: 'Woodworking & Hand Tools',
    icon: FaTools,
    imageUrl: 'https://images.unsplash.com/photo-1595005954694-39907c1122a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 4,
    title: 'Art Stations & Creative Zones',
    icon: FaCube,
    imageUrl: 'https://images.unsplash.com/photo-1520420283999-e2c776335a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 5,
    title: 'CAD Laptops & Programming Hub',
    icon: FaLaptopCode,
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
  },
  {
    id: 6,
    title: 'Electronics & Prototyping',
    icon: FaBolt,
    imageUrl: 'https://images.unsplash.com/photo-1555774698-0b77e0abfe79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
];

const WorksSection = () => {
  // Estado para mantener el ID de la característica activa. Inicia con el primero.
  const [activeWork, setActiveWork] = useState(worksData[0]);

  const handleWorkHover = (work) => {
    setActiveWork(work);
  };

  return (
    <section className="works-section">
      <div className="works-container">
        <div className="works-content">
          <h2 className="works-title">Nuestras Capacidades</h2>
          <p className="works-subtitle">Tecnología, arte y precisión en un solo espacio.</p>
          <div className="works-grid">
            {worksData.map((work) => (
              <div
                key={work.id}
                className={`work-item ${activeWork.id === work.id ? 'active' : ''}`}
                onMouseEnter={() => handleWorkHover(work)}
              >
                <work.icon className="work-icon" />
                <span className="work-item-title">{work.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="works-image-panel">
          {/* Renderizamos todas las imágenes, pero solo la activa será visible */}
          {worksData.map((work) => (
            <div
              key={work.id}
              className={`work-image ${activeWork.id === work.id ? 'visible' : ''}`}
              style={{ backgroundImage: `url(${work.imageUrl})` }}
            ></div>
          ))}
          <div className="image-overlay">
            <h3 className="image-overlay-title">{activeWork.title}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;