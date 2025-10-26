// client/src/sections/AboutSection.jsx
import React from 'react';
import FounderProfile from '../components/FounderProfile';
import '../styles/AboutSection.css';

const foundersData = [
  {
    name: 'Leonardo Yanez',
    title: 'Field Engineer & Product Designer',
    description: 'With comprehensive experience across the oil and gas sector, Leonardo brings rigorous problem-solving discipline and a relentless passion for learning. He’s the driving force behind designing functional mechanisms and robust products, ensuring every idea is grounded in real-world applicability and structural integrity.',
    quote: 'Engineering isn’t just about solving problems—it’s about creating possibilities.',
    imageColor: '#f39c12' // Naranja
  },
  {
    name: 'Mariusz Szczepan',
    title: 'Dental Technician & Community Builder',
    description: 'Operating at the intersection of art, science, and technology, Mariusz brings expertise in 3D scanning, digital modeling, 3D printing, and advanced post-processing. His true magic lies in his ability to translate complex technical concepts into exciting possibilities and make everyone feel heard and valued.',
    quote: 'The best products are made with precision and heart.',
    imageColor: '#8e44ad' // Morado
  }
];

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
          Leonardo builds robust, functional systems and dives into new skills to expand capabilities.
          Mariusz ensures the final product is perfectly finished and the client’s journey is exceptional.
          Together, they cover the entire spectrum—from technical backbone to customer-centric heart.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;