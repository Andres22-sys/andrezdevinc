// src/sections/PortfolioSection.js
import React from 'react';
import './PortfolioSection.css';

// Importing the images
import project1 from '../assets/images/ksinc-web.png';
import project2 from '../assets/images/cinema-web.png';
import project3 from '../assets/images/pastry-web.png';
import project4 from '../assets/images/tea-web.png';

function PortfolioSection() {
    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolio</h2>
            <p>Check out some of the websites we’ve built for our clients.</p>
            <div className="portfolio-cards">
                <div className="portfolio-card">
                    {/* Link around the image */}
                    <a href="https://ksiwinc.com/" target="_blank" rel="noopener noreferrer">
                        <img src={project1} alt="K&S Ironworks" />
                    </a>
                    <h3>K&S Ironworks</h3>
                    <p>A website for a welding company.</p>
                </div>
                <div className="portfolio-card">
                    <a href="https://andres22-sys.github.io/Cinemaniacs_website/" target="_blank" rel="noopener noreferrer">
                        <img src={project2} alt="Cinemaniacs" />
                    </a>
                    <h3>Cinemaniacs</h3>
                    <p>A landing page for a movie review club.</p>
                </div>
                <div className="portfolio-card">
                    <a href="https://andres22-sys.github.io/Huckleberry_pastry/?#home" target="_blank" rel="noopener noreferrer">
                        <img src={project3} alt="Project 3" />
                    </a>
                    <h3>Huckleberry Pastry</h3>
                    <p>A landing page for a pastry company.</p>
                </div>
                <div className="portfolio-card">
                    <a href="https://andres22-sys.github.io/tea-cozy-web-project/" target="_blank" rel="noopener noreferrer">
                        <img src={project4} alt="Project 4" />
                    </a>
                    <h3>Tea Cozy</h3>
                    <p>A landing page for a coffee shop.</p>
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;
