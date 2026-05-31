// client/src/sections/ContactSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';
import {
  trackContactFlowAbandon,
  trackContactSubmitAttempt,
  trackContactSubmitSuccess,
} from '../utils/conversionEvents';
import '../styles/ContactSection.css';

const initialFormValues = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

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
  const form = useRef();
  const fieldRefs = useRef({});
  const hasTrackedAbandon = useRef(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState('');

  const hasStartedForm = Object.values(formValues).some((value) => value.trim() !== '');

  useEffect(() => {
    const trackAbandonIfNeeded = (reason) => {
      if (!hasStartedForm || hasTrackedAbandon.current || sendStatus === 'success') {
        return;
      }

      hasTrackedAbandon.current = true;
      trackContactFlowAbandon({ reason, topic: activeTopic.id });
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        trackAbandonIfNeeded('visibility_hidden');
      }
    };

    const handleBeforeUnload = () => {
      trackAbandonIfNeeded('before_unload');
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      trackAbandonIfNeeded('unmount');
    };
  }, [activeTopic.id, hasStartedForm, sendStatus]);

  const validateForm = () => {
    const nextErrors = {};

    if (!formValues.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!formValues.email.trim()) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }

    if (!formValues.message.trim()) {
      nextErrors.message = 'Please enter a message so we can help you.';
    }

    return nextErrors;
  };

  const focusFirstError = (nextErrors) => {
    const firstField = Object.keys(nextErrors)[0];
    if (firstField) {
      fieldRefs.current[firstField]?.focus();
    }
  };

  const handleTopicChange = (topicId) => {
    setActiveTopic(contactTopics[topicId]);
    setSendStatus('');
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormValues((current) => ({ ...current, [name]: value }));
    hasTrackedAbandon.current = false;

    if (errors[name]) {
      setErrors((current) => {
        const nextErrors = { ...current };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const nextErrors = validateForm();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSendStatus('validation_error');
      focusFirstError(nextErrors);
      return;
    }

    trackContactSubmitAttempt();
    setIsSending(true);
    setSendStatus('');
    setErrors({});

    const templateParams = {
        activeTopicTitle: activeTopic.title,
        fullName: formValues.fullName,
        email: formValues.email,
        phone: formValues.phone,
        company: formValues.company,
        message: formValues.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          trackContactSubmitSuccess();
          hasTrackedAbandon.current = false;
          setIsSending(false);
          setSendStatus('success');
          setFormValues(initialFormValues);
          form.current?.reset();
        },
        () => {
          setIsSending(false);
          setSendStatus('processing_failure');
        }
      );
  };

  const handleRetry = () => {
    setSendStatus('');
  };

  const setFieldRef = (fieldName) => (element) => {
    fieldRefs.current[fieldName] = element;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2 className="section-title">Get In Touch</h2>
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

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-grid">
            <div className={`form-group ${errors.fullName ? 'has-error' : ''}`}>
              <label htmlFor="fullName">Full name *</label>
              <input ref={setFieldRef('fullName')} type="text" id="fullName" name="fullName" placeholder="Your name" required value={formValues.fullName} onChange={handleChange} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? 'fullName-error' : undefined} />
              {errors.fullName && <p className="field-error" id="fullName-error">{errors.fullName}</p>}
            </div>
            <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
              <label htmlFor="email">Email *</label>
              <input ref={setFieldRef('email')} type="email" id="email" name="email" placeholder="your@email.com" required value={formValues.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
              {errors.email && <p className="field-error" id="email-error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone number</label>
              <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" value={formValues.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company / Organization</label>
              <input type="text" id="company" name="company" placeholder="Your company name" value={formValues.company} onChange={handleChange} />
            </div>
          </div>
          <div className={`form-group full-width ${errors.message ? 'has-error' : ''}`}>
            <label htmlFor="message">Message *</label>
            <textarea
              ref={setFieldRef('message')}
              id="message"
              name="message"
              rows="6"
              placeholder={activeTopic.placeholder}
              required
              value={formValues.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            ></textarea>
            {errors.message && <p className="field-error" id="message-error">{errors.message}</p>}
          </div>

          <div className="info-box">
            <p><strong>{activeTopic.title}:</strong> {activeTopic.info}</p>
          </div>

          <button type="submit" className="btn btn-primary submit-button" disabled={isSending}>
            {isSending ? 'Sending...' : <>Send Message <FiSend /></>}
          </button>
          {sendStatus === 'success' && <p className="feedback-message success">Message sent successfully! We'll be in touch soon.</p>}
          {sendStatus === 'validation_error' && <p className="feedback-message error" role="alert">Please fix the highlighted fields and try again.</p>}
          {sendStatus === 'processing_failure' && (
            <div className="feedback-message error feedback-message-action" role="alert">
              <p>Something went wrong while sending your message. Your details are still here, so you can retry.</p>
              <button type="button" className="retry-button" onClick={handleRetry}>Try again</button>
            </div>
          )}

        </form>
      </div>
      <p className="response-time-notice">
        We typically respond within 24 hours during business days.
      </p>
    </section>
  );
};

export default ContactSection;
