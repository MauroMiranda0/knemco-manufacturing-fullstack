// client/src/sections/ServicesSection.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/ServicesSection.css';
// --- NUEVO CÓDIGO: Importamos iconos de línea ---
import { FaBookOpen,
  FaTools,
  FaCompass	
 } from 'react-icons/fa'; // FontAwesome

import {
  TfiRocket,
  TfiPrinter,
  TfiPackage
} from 'react-icons/tfi'; // Feather Icons, como sugiere la guía

// --- NUEVO CONTENIDO DEL ARQUETIPO MENTOR ---
const servicesData = [
  {
    icon: <TfiPrinter />,
    title: 'Your On-Demand Manufacturing Partner',
    description: 'Test, iterate, and grow without risk.',
    features: [
      'Start with just one unit',
      'No minimums holding you back',
      'Quick turns, faster learning',
      'The perfect material for your vision',
      'Every part checked with care',
      'Fair rates for every stage of your journey'
    ]
  },
  {
    icon: <FaBookOpen />, // Usamos el ícono de 'aprender' para esta sección
    title: 'Product Launching & Workshops',
    description: "From your first print to designing your own products, we're here to guide you.",
    features: [
      'Your First Print: Master the essentials',
      'Next-Level Skills: Learn advanced techniques',
      'Design for Reality: Get hands-on with pro software',
      'Materials, Decoded: Understand which filament is right',
      'Project-Based Learning: Build something real'
    ]
  },
  {
    icon: <FaTools />,
    title: 'Custom Mechanical Parts',
    description: 'Precision-engineered replacement and custom parts for industrial applications. Fast, flexible, and reliable.',
    features: ['Rapid part design', 'Functional prototyping', 'Material selection guidance', 'Post-processing services', 'Quality testing']
  },
  {
    icon: <FaCompass />,
    title: 'Design & Engineering Consulting',
    description: 'Expert guidance on product design, material selection, and manufacturing optimization to make better decisions.',
    features: ['3D modeling & CAD', 'Material recommendations', 'Design for manufacturability', 'Feasibility analysis', 'Cost optimization']
  },
  {
    icon: <TfiRocket />,
    title: 'Full Product Launch Package',
    description: 'Our most comprehensive service for entrepreneurs. We become your strategic partner from concept to market.',
    features: ['Product design & engineering', 'Prototype development', 'Manufacturing optimization', 'Market consulting', 'Branding support']
  },

  {
    icon: <TfiPackage />,
    title: 'Materials & Supplies',
    description: 'Premium 3D printing filaments, resins, and components. Curated selection from trusted manufacturers.',
    features: ['Multiple material types', 'Bulk discounts available', 'Quality guaranteed', 'Expert recommendations', 'Fast shipping']
  }
];
// --- FIN DEL NUEVO CONTENIDO ---

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        {/* --- NUEVO TÍTULO Y SUBTÍTULO --- */}
        <h2 className="section-title">The Right Tools & Team for Your Big Idea.</h2>
        <p className="section-subtitle">
          From a single custom piece to a full product line, we're with you at every step.
        </p>
        {/* --- FIN DEL NUEVO TÍTULO Y SUBTÍTULO --- */}
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;