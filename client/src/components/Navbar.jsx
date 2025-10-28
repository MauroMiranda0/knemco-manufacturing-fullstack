// client/src/components/Navbar.jsx
import React, { useState } from 'react'; // Importa useState
import Logo from '../assets/images/logo.png';

import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar el menú responsive

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Cambia el estado de abierto/cerrado
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/" className="navbar-logo">
                    <img src={Logo} alt="imagen logo" />
                </a>
            </div>

            {/* Botón de hamburguesa */}
            <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu">
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </button>

            {/* La lista de navegación ahora usa una clase condicional */}
            <ul className={`navbar-nav ${isOpen ? 'open' : ''}`}>
                <li className="nav-item">
                    <a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</a>
                </li>
                <li className="nav-item">
                    <a href="#products" className="nav-link" onClick={() => setIsOpen(false)}>Products</a>
                </li>
                <li className="nav-item">
                    <a href="#investment" className="nav-link" onClick={() => setIsOpen(false)}>Investment</a>
                </li>
                <li className="nav-item">
                    <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About Us</a>
                </li>
                <li className="nav-item">
                    <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</a>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;









