import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import '../components/style.css';
import Footer from './pages/Footer';

export default function Portfolio() {
    const [currentSection, setCurrentSection] = useState('About');

    const renderSection = () => {
        if (currentSection === 'About') {
            return <About />;
        }
        if (currentSection === 'Projects') {
            return <Projects />;
        }
        if (currentSection === 'Resume') {
            return <Resume />;
        }
        else {
            return <Contact />;
        }
    };

    const handleSectionChange = (section) => setCurrentSection(section);

    return (
        <div>
        <div>
            <NavTabs currentSection={currentSection} handleSectionChange={handleSectionChange} />
            {renderSection()}
        </div>
        <div className='footerContainer'>
            <Footer />
        </div>
        </div>
    )
}