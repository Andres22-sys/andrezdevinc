import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import ProcessSection from './sections/ProcessSection';
import ContactSection from './sections/ContactSection';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <PortfolioSection />
            <ProcessSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

export default App;
