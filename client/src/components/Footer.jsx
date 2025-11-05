// client/src/components/Footer.jsx
// --- CÓDIGO COMPLETO DEL ARCHIVO ---
import React from 'react';
import { FiLinkedin, FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import Logo from '../assets/images/KnemcoLogoFooter.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Marca y Redes Sociales */}
        <div className="footer-column brand-column">
          <a href="/" className="footer-logo">
            <img src={Logo} alt="imagen logo" />
          </a>
          <p className="footer-tagline">Manufacture Your Ideas. Grow With Your Community.</p>
          <div className="social-icons">
            <a href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
            <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
            <a href="#"aria-label="TikTok"target="_blank"rel="noopener noreferrer"><FaTiktok /></a>
            {/* <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FiTwitter /></a> */}
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

        {/* Columna 3: Contacto (con los nuevos datos) */}
        <div className="footer-column contact-column">
          <h4 className="footer-heading">Get in Touch</h4>
          {/* --- NUEVOS DATOS --- */}
          <p>
            9804 100 Ave., Grande Prairie
            <br />
            Alberta, Canada. T8V 0T8
          </p>
          <p><a href="mailto:letsprint@knemco.ca">letsprint@knemco.ca</a></p>
          <p>
            <a href="https://knemco.ca" target="_blank" rel="noopener noreferrer">knemco.ca</a>
            {' | '}
            <a href="https://knemco.co" target="_blank" rel="noopener noreferrer">knemco.co</a>
          </p>
          {/* --- FIN DE NUEVOS DATOS --- */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Knemco Manufacturing Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;