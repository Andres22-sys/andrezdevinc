// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import heroVid from '../assets/videos/web-banner.mp4'

function HeroSection() {
    return (
        <section id="hero" className="hero">
            <video className="hero-video" autoPlay loop muted playsInline>
                <source src={heroVid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
                <h1>WELCOME TO OUR WEBSITE</h1>
                <p>Your success is our goal. Let’s build something amazing together.</p>
                <button onClick={() => window.location.href = '#contact'}>Get Started</button>
            </div>
        </section>
    );
}

export default HeroSection;
