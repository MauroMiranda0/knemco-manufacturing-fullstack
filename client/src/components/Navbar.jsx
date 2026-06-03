// client/src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
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

const MAX_VISIBLE_NAV_ITEMS = 5;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 16);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const visibleNavItems = navItems.slice(0, MAX_VISIBLE_NAV_ITEMS);

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isOpen ? 'navbar-menu-open' : ''}`}>
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
                {visibleNavItems.map((item) => (
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
