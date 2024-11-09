// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import logoLight from '../assets/images/logo-black.png'; // Light mode logo
import logoDark from '../assets/images/logo-black.png';   // Dark mode logo

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            {/* Logo with conditional rendering based on dark mode */}
            <a href="/" className="navbar-logo">
                <img
                    src={darkMode ? logoDark : logoLight} // Toggle image based on dark mode
                    alt="My Brand Logo"
                    style={{ width: '50px', height: 'auto' }}
                />
            </a>

            {/* Dark Mode Toggle Button */}
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? "⚪ Light" : "⚫ Dark"}
            </button>

            {/* Menu Toggle Button (Mobile) */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            {/* Navbar Links */}
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#hero" onClick={closeMenu}>Home</a></li>
                <li><a href="#services" onClick={closeMenu}>Services</a></li>
                <li><a href="#portfolio" onClick={closeMenu}>Portfolio</a></li>
                <li><a href="#process" onClick={closeMenu}>Process</a></li>
                <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
