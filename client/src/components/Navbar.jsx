// client/src/components/Navbar.jsx
import React, { useState } from 'react';
import Logo from '../assets/images/KnemcoLogoContorno.png';
import { trackCtaClickContact } from '../utils/conversionEvents';

import '../styles/Navbar.css';

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#products', label: 'Products' },
  { href: '#investment', label: 'Investment' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact', isPrimary: true },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/" className="navbar-logo">
                    <img src={Logo} alt="imagen logo" />
                </a>
            </div>

            <button className="hamburger-menu" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen} aria-controls="primary-navigation">
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </button>

            <ul className={`navbar-nav ${isOpen ? 'open' : ''}`} id="primary-navigation">
                {navItems.map((item) => (
                    <li className="nav-item" key={item.href}>
                        <a
                            href={item.href}
                            className={`nav-link ${item.isPrimary ? 'nav-link-primary' : ''}`}
                            onClick={() => {
                                if (item.href === '#contact') {
                                    trackCtaClickContact('navbar_contact_link');
                                }
                                setIsOpen(false);
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

        </nav>
    );
};

export default Navbar;
