// client/src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Marca y Redes Sociales */}
        <div className="footer-column brand-column">
          <h3 className="footer-logo">KNEMCO</h3>
          <p className="footer-tagline">Your Ideas, Made in Grande Prairie.</p>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="footer-column links-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#investment">Investment</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-column contact-column">
          <h4 className="footer-heading">Contact Us</h4>
          <p>Grande Prairie, Alberta, Canada</p>
          <p><a href="mailto:info@knemcomfg.com">info@knemcomfg.com</a></p>
          <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Knemco Manufacturing. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;