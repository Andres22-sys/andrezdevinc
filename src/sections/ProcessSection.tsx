import React from 'react';
import './ProcessSection.css';

interface Step {
    number: number;
    title: string;
    description: string;
}

const steps: Step[] = [
    {
        number: 1,
        title: 'Initial Consultation',
        description: 'Discuss your goals, target audience, and desired features to align on a project roadmap that meets your vision.',
    },
    {
        number: 2,
        title: 'Design Phase',
        description: 'Create custom, brand-aligned design, incorporating your feedback to ensure every detail reflects your vision.',
    },
    {
        number: 3,
        title: 'Development',
        description: 'Build a responsive, fast, and SEO-optimized site that incorporates all requested features for an optimal user experience.',
    },
    {
        number: 4,
        title: 'Review & Launch',
        description: 'Thorough testing and final adjustments, launch your site and provide support to ensure a smooth handoff.',
    },
];

function ProcessSection() {
    return (
        <section id="process" className="process">
            <h2>Process</h2>
            <p>We follow a streamlined process to deliver high-quality websites efficiently.</p>
            <div className="process-steps">
                {steps.map((step) => (
                    <div className="step-card" key={step.number}>
                        <div className="step-icon">{step.number}</div>
                        <h3>{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProcessSection;
