// client/src/sections/ContactSection.jsx
import React, { useState } from 'react';
import { FiSend } from 'react-icons/fi';
import '../styles/ContactSection.css';

const contactTopics = {
  project: {
    id: 'project',
    title: 'Project inquiry',
    placeholder: 'Tell us about your project requirements, goals, and timeline...',
    info: 'Let us know what you want to build. We’ll get back to you with a quote and timeline.'
  },
  investment: {
    id: 'investment',
    title: 'Investment interest',
    placeholder: 'Tell us about your investment interests...',
    info: 'Learn about our printer investment program and passive income opportunities. We’ll provide detailed information about returns and participation.'
  },
  partnership: {
    id: 'partnership',
    title: 'Partnership opportunity',
    placeholder: 'Describe the partnership opportunity you have in mind...',
    info: 'We are always open to collaborating with local businesses and creators. Let’s build something great together.'
  }
};

const ContactSection = () => {
  const [activeTopic, setActiveTopic] = useState(contactTopics.investment);

  const handleTopicChange = (topicId) => {
    setActiveTopic(contactTopics[topicId]);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Get in touch</h2>
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
              <label htmlFor="fullName">Full name *</label>
              <input type="text" id="fullName" name="fullName" placeholder="Your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company / Organization</label>
              <input type="text" id="company" name="company" placeholder="Your company name" />
            </div>
          </div>
          <div className="form-group full-width">
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

          <button type="submit" className="btn btn-primary submit-button">
            Send Message <FiSend />
          </button>

        </form>
      </div>
      <p className="response-time-notice">
        We typically respond within 24 hours during business days.
      </p>
    </section>
  );
};

export default ContactSection;