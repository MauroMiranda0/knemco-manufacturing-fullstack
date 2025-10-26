// client/src/sections/ContactSection.jsx
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Icono para el botón de enviar
import '../styles/ContactSection.css';

// Datos para los diferentes temas de contacto
const contactTopics = {
  project: {
    id: 'project',
    title: 'Project Inquiry',
    placeholder: 'Tell us about your project requirements, goals, and timeline...',
    info: 'Project Inquiry: Let us know what you want to build. We’ll get back to you with a quote and timeline.'
  },
  investment: {
    id: 'investment',
    title: 'Investment Interest',
    placeholder: 'Tell us about your investment interests...',
    info: 'Investment Interest: Learn about our printer investment program and passive income opportunities. We’ll provide detailed information about returns and participation.'
  },
  partnership: {
    id: 'partnership',
    title: 'Partnership Opportunity',
    placeholder: 'Describe the partnership opportunity you have in mind...',
    info: 'Partnership Opportunity: We are always open to collaborating with local businesses and creators. Let’s build something great together.'
  }
};

const ContactSection = () => {
  // Estado para manejar el tema activo. 'investment' es el inicial por defecto.
  const [activeTopic, setActiveTopic] = useState(contactTopics.investment);

  const handleTopicChange = (topicId) => {
    setActiveTopic(contactTopics[topicId]);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Have a question or a project in mind? We’d love to hear from you.</p>
      </div>

      <div className="contact-form-container">
        <div className="topic-buttons">
          {Object.values(contactTopics).map((topic) => (
            <button
              key={topic.id}
              className={`topic-btn ${activeTopic.id === topic.id ? 'active' : ''}`}
              onClick={() => handleTopicChange(topic.id)}
            >
              {topic.title}
            </button>
          ))}
        </div>

        <form className="contact-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="fullName">Full Name *</label>
              <input type="text" id="fullName" name="fullName" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company / Organization</label>
              <input type="text" id="company" name="company" placeholder="Your company name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder={activeTopic.placeholder}
              required
            ></textarea>
          </div>

          <div className="info-box">
            <p><strong>{activeTopic.title}:</strong> {activeTopic.info}</p>
          </div>

          <button type="submit" className="submit-button">
            Send Message <FaPaperPlane className="submit-icon" />
          </button>
          <p className="response-time-notice">
            We typically respond within 24 hours during business days.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;