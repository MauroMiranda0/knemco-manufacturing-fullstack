// client/src/sections/ServicesSection.jsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/ServicesSection.css';
import { FiPrinter } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi';
import { FiTool } from 'react-icons/fi';
import { FiCompass } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';
import { FiPackage } from 'react-icons/fi';

const servicesData = [
  {
    icon: <FiPrinter />,
    title: 'Your on-demand manufacturing partner',
    description: 'Test, iterate, and grow without risk. Start with just one unit, with no minimums holding you back.',
  },
  {
    icon: <FiBookOpen />,
    title: 'Product launching & workshops',
    description: "From your first print to designing your own products, we're here to guide you every step of the way.",
  },
  {
    icon: <FiTool />,
    title: 'Custom mechanical parts',
    description: 'Precision-engineered replacement and custom parts for industrial applications. Fast, flexible, and reliable.',
  },
  {
    icon: <FiCompass />,
    title: 'Design & engineering consulting',
    description: 'Expert guidance on product design, material selection, and manufacturing optimization to make better decisions.',
  },
  {
    icon: <FaRocket />,
    title: 'Full product launch package',
    description: 'Our most comprehensive service for entrepreneurs. We become your strategic partner from concept to market.',
  },
  {
    icon: <FiPackage />,
    title: 'Materials & supplies',
    description: 'Premium 3D printing filaments, resins, and components. Curated selection from trusted manufacturers.',
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2 className="section-title">The right tools & team for your big idea.</h2>
        <p className="section-subtitle">
          From a single custom piece to a full product line, we're with you at every step.
        </p>
      </div>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;