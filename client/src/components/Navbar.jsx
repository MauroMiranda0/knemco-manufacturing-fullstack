// client/src/components/Navbar.jsx
import React from 'react';
import '../styles/Navbar.css'; // Importamos el CSS específico para el Navbar
import Logo from '../assets/logo.jpg';


const Navbar = () => {
  // Podemos añadir estado y lógica para el menú responsive aquí más adelante
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-logo">
        <img src={Logo} alt="imagen logo" />
          <span className='title'>KNEMCO Manufacturing</span>
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#work" className="nav-link">Work</a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="#services" className="nav-link">Services</a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;