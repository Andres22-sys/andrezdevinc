import React from 'react';
import './PortfolioSection.css';

import project1 from '../assets/images/ksinc-web.png';
import project2 from '../assets/images/proccesingForLess.png';
import project3 from '../assets/images/pastry-web.jpg';
import project4 from '../assets/images/tea-web.jpg';
import project5 from '../assets/images/restaurant-web.png';
import project6 from '../assets/images/nexoria-web.png';

interface Project {
    image: string;
    alt: string;
    url: string;
    title: string;
    description: string;
}

const projects: Project[] = [
    { image: project1, alt: 'K&S Ironworks', url: 'https://ksiwinc.com/', title: 'K&S Ironworks', description: 'A website for a welding company.' },
    { image: project2, alt: 'POS Service Website', url: 'https://ccprocessingforless.com/', title: 'CC Processing For Less', description: 'A website for a Clover POS service.' },
    { image: project3, alt: 'Huckleberry Pastry', url: 'https://pastry-web.vercel.app/', title: 'Huckleberry Pastry', description: 'A landing page for a pastry company.' },
    { image: project4, alt: 'Tea Cozy', url: 'https://teashop-web.vercel.app/', title: 'Tea Cozy', description: 'A landing page for a coffee shop.' },
    { image: project5, alt: 'Gericht Restaurant', url: 'https://modern-ux-ui-restaurant.vercel.app/', title: 'Gericht', description: 'A landing page for a restaurant.' },
    { image: project6, alt: 'Nexoria Dashboard', url: 'https://nexoria-gamma.vercel.app/', title: 'Nexoria', description: 'A landing page for a financial dashboard.' },
];

function PortfolioSection() {
    return (
        <section id="portfolio" className="portfolio">
            <h2>Portfolio</h2>
            <p>Check out some of the websites we&apos;ve built for our clients.</p>
            <div className="portfolio-cards">
                {projects.map((project) => (
                    <div className="portfolio-card" key={project.title}>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            <img src={project.image} alt={project.alt} />
                        </a>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PortfolioSection;
