// src/sections/ProcessSection.js
import React from 'react';
import './ProcessSection.css';

function ProcessSection() {
    return (
        <section id="process" className="process">
            <h2>Process</h2>
            <p>We follow a streamlined process to deliver high-quality websites efficiently.</p>
            <div className="process-steps">
                <div className="step-card">
                    <div className="step-icon">1</div>
                    <h3>Initial Consultation</h3>
                    <p>Discuss your goals, target audience, and desired features to align 
                        on a project roadmap that meets your vision.</p>
                </div>
                <div className="step-card">
                    <div className="step-icon">2</div>
                    <h3>Design Phase</h3>
                    <p>Create custom, brand-aligned design, incorporating your feedback 
                        to ensure every detail reflects your vision.</p>
                </div>
                <div className="step-card">
                    <div className="step-icon">3</div>
                    <h3>Development</h3>
                    <p>Build a responsive, fast, and SEO-optimized site that incorporates 
                        all requested features for an optimal user experience.</p>
                </div>
                <div className="step-card">
                    <div className="step-icon">4</div>
                    <h3>Review & Launch</h3>
                    <p>Torough testing and final adjustments, launch your 
                        site and provide support to ensure a smooth handoff.</p>
                </div>
            </div>
        </section>
    );
}

export default ProcessSection;
