// src/sections/ServicesSection.js
import React from 'react';
import './ServicesSection.css';

function ServicesSection() {
    return (
        <section id="services" className="services">
            <h2>Services</h2>
            <div className="service-cards">
                <div className="card">
                    <h3>Custom Design</h3>
                    <p>We create visually unique, user-centered designs tailored to reflect your 
                        brand identity and engage your audience.</p>
                </div>
                <div className="card">
                    <h3>SEO Optimization</h3>
                    <p>Boost your website’s visibility on search engines with targeted keyword 
                        research, on-page optimization, and technical SEO improvements.</p>
                </div>
                <div className="card">
                    <h3>Responsive Design</h3>
                    <p>Your website will seamlessly adapt to any screen size, providing an optimized 
                        and consistent experience on desktops, tablets, and mobile devices.
                    </p>
                </div>
                <div className="card">
                    <h3>Website Maintenance & Support</h3>
                    <p>Ensure websites stay up-to-date, secure, and running smoothly with regular 
                        updates, backups, and bug fixes.</p>
                </div>
                <div className="card">
                    <h3>Branding & Graphic Design</h3>
                    <p>Create or enhance brand identity through logo design, custom graphics, and 
                        cohesive visual design for websites and social media.</p>
                </div>
                <div className="card">
                    <h3>Analytics & Performance Tracking</h3>
                    <p>Set up tools like Google Analytics, provide monthly reports, and track conversions 
                        to help clients understand and grow their audience.</p>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
