// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>
                Follow us on&nbsp;
                <a 
                    href="https://www.instagram.com/andrezdevinc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Instagram
                </a> 
                &nbsp;|&nbsp; 
                <a 
                    href="https://www.pinterest.com/AndrezDev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Pinterest
                </a>
            </p>
            <p>&copy; 2024 AndrezDevInc. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
