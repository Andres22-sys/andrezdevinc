import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Home, Briefcase, Folder, Workflow, Mail } from 'lucide-react';
import logoLight from '../assets/images/logo-black.png';
import logoDark from '../assets/images/logo-black.png';

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 767);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar">
            {!isMobile && (
                <>
                    <a href="/" className="navbar-logo">
                        <img
                            src={darkMode ? logoDark : logoLight}
                            alt="My Brand Logo"
                            style={{ width: '50px', height: 'auto' }}
                        />
                    </a>

                    <ul className="navbar-links">
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#process">Process</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <button className="dark-mode-toggle" onClick={toggleDarkMode}></button>
                </>
            )}

            {isMobile && (
                <ul className="navbar-links mobile-bottom-nav">
                    <li><a href="#hero"><Home size={20} /><span>Home</span></a></li>
                    <li><a href="#services"><Briefcase size={20} /><span>Services</span></a></li>
                    <li><a href="#portfolio"><Folder size={20} /><span>Portfolio</span></a></li>
                    <li><a href="#process"><Workflow size={20} /><span>Process</span></a></li>
                    <li><a href="#contact"><Mail size={20} /><span>Contact</span></a></li>
                </ul>
            )}
        </nav>
    );
}

export default Navbar;
