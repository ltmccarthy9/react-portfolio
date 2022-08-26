import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function Portfolio() {
    const [currentSection, setCurrentSection] = useState('About');

    const renderSection = () => {
        if (currentSection === 'About') {
            return <About />;
        }
        if (currentSection === 'Projects') {
            return <Projects />
        }
        if (currentSection === 'Resume') {
            return <Resume />
        }
        return <Contact />;
    };

    const handleSectionChange = (section) => setCurrentSection(section);

    return (
        <div>
            <NavTabs currentSection={currentSection} handleSectionChange={handleSectionChange} />
            {renderSection()}
        </div>
    )
}