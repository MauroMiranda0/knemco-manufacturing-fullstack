// client/src/sections/ServicesSection.jsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/ServicesSection.css';

const servicesData = [
  {
    icon: '🖨️',
    title: 'Print-on-Demand Manufacturing',
    description: 'Scalable production for your designs without minimum order quantities. Perfect for testing market demand and iterating quickly.',
    features: ['No minimum order quantities', 'Fast turnaround times', 'Multiple material options', 'Quality assurance included', 'Competitive pricing']
  },
  {
    icon: '🚀',
    title: 'Product Launch Package',
    description: 'Complete end-to-end service for entrepreneurs and businesses. From concept to market, we handle design, engineering, manufacturing, and go-to-market strategy.',
    features: ['Product design & engineering', 'Prototype development', 'Manufacturing optimization', 'Market consulting', 'Branding support', 'Launch strategy']
  },
  {
    icon: '⚙️',
    title: 'Custom Mechanical Parts',
    description: 'Precision-engineered replacement and custom parts for automotive, machinery, and industrial applications. Fast, flexible, and reliable.',
    features: ['Rapid part design', 'Functional prototyping', 'Material selection guidance', 'Post-processing services', 'Quality testing', 'Bulk production ready']
  },
  {
    icon: '🎨',
    title: 'Design & Engineering Consulting',
    description: 'Expert guidance on product design, material selection, and manufacturing optimization. Leverage our experience to make better decisions.',
    features: ['3D modeling & CAD', 'Material recommendations', 'Design for manufacturability', 'Technical documentation', 'Feasibility analysis', 'Cost optimization']
  },
  {
    icon: '📚',
    title: 'Workshops & Training',
    description: 'Learn the fundamentals of 3D printing, design, and product development. From beginners to advanced, we have programs for everyone.',
    features: ['3D printing basics', 'Advanced techniques', 'Design software training', 'Material science', 'Business development', 'Hands-on projects']
  },
  {
    icon: '📦',
    title: 'Materials & Supplies',
    description: 'Premium 3D printing filaments, resins, and components. Curated selection from trusted manufacturers.',
    features: ['Multiple material types', 'Bulk discounts available', 'Quality guaranteed', 'Expert recommendations', 'Fast shipping', 'Technical support']
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="section-header">
        <h2 className="section-title">Services Designed for Creators and Businesses</h2>
        <p className="section-subtitle">
          Whether you need a single custom part or a complete product launch strategy, Knemco provides
          comprehensive manufacturing and consulting services tailored to your needs.
        </p>
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