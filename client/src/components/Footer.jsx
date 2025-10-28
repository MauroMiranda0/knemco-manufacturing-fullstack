// client/src/components/Footer.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
// Usamos iconos de línea de Feather Icons para consistencia
import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import Logo from '../assets/images/logo.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Marca y Redes Sociales */}
        <div className="footer-column brand-column">
          <div className="navbar-brand">
            <a href="/" className="navbar-logo">
              <img src={Logo} alt="imagen logo" />
            </a>
          </div>
          {/* <h3 className="footer-logo">Knemco</h3> */}
          <p className="footer-tagline">Manufacture Your Ideas. Grow With Your Community.</p>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
            <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
          </div>
        </div>

        {/* Columna 2: Enlaces Rápidos */}
        <div className="footer-column links-column">
          <h4 className="footer-heading">Navigate</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#investment">Investment</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-column contact-column">
          <h4 className="footer-heading">Get in Touch</h4>
          <p>Grande Prairie, Alberta<br />Canada</p>
          <p><a href="mailto:info@knemcomfg.com">info@knemcomfg.com</a></p>
          <p><a href="#contact">Contact Form</a></p> {/* Enlace al formulario de la página */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Knemco Manufacturing Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;