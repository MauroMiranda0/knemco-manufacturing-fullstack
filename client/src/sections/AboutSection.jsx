// client/src/sections/AboutSection.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import FounderProfile from '../components/FounderProfile';
import '../styles/AboutSection.css';

// --- NUEVO CÓDIGO: Importamos las imágenes de los fundadores ---
import leonardoImg from '../assets/images/founder-leonardo-yanez.jpg';
import mariuszImg from '../assets/images/founder-mariusz-szczepan.jpg';

const foundersData = [
  {
    name: 'Leonardo Yanez',
    title: 'Field Engineer & Product Designer',
    description: 'With comprehensive experience across the oil and gas sector, Leonardo brings rigorous problem-solving discipline and a relentless passion for learning...',
    quote: 'Engineering isn’t just about solving problems—it’s about creating possibilities.',
    imageUrl: leonardoImg // Usamos la imagen importada
  },
  {
    name: 'Mariusz Szczepan',
    title: 'Dental Technician & Community Builder',
    description: 'Operating at the intersection of art, science, and technology, Mariusz brings expertise in 3D scanning, digital modeling, 3D printing, and advanced post-processing...',
    quote: 'The best products are made with precision and heart.',
    imageUrl: mariuszImg // Usamos la imagen importada
  }
];
// --- FIN DEL NUEVO CÓDIGO ---

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <h2 className="section-title">Meet the Founders</h2>
      </div>
      <div className="founders-grid">
        {foundersData.map(founder => (
          <FounderProfile key={founder.name} {...founder} />
        ))}
      </div>
      <div className="synergy-box">
        <h3 className="synergy-title">The Synergy</h3>
        <p className="synergy-text">
          Leonardo builds robust, functional systems... Mariusz ensures the final product is perfectly finished... Together, they cover the entire spectrum—from technical backbone to customer-centric heart.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;