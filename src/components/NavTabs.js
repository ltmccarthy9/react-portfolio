import React from 'react';
import '../components/style.css';

function NavTabs({ currentSection, handleSectionChange,}) {
return (
    <header className='header'>
        <h1>Liam McCarthy</h1>
    <ul className="nav nav-tabs">
        <li className="nav-item">
            <a
            href="#about"
            onClick={() => handleSectionChange('About')}
            className={currentSection === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#projects"
            onClick={() => handleSectionChange('Projects')}
            className={currentSection === 'Projects' ? 'nav-link active' : 'nav-link'}
            >
                Projects
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#resume"
            onClick={() => handleSectionChange('Resume')}
            className={currentSection === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
        </li>
        <li className="nav-item">
            <a
            href="#contact"
            onClick={() => handleSectionChange('Contact')}
            className={currentSection === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </a>
        </li>
    </ul>
    </header>
    );
}

export default NavTabs;