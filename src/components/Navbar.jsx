import React, { useState } from 'react';
import logo from '../logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
            <div className="left nav_items">
                <img src={logo} className="logo" alt="Logo" />
            </div>
            <div className={`right nav_links ${isOpen ? 'open' : ''}`}>
                <a href="#home" className="nav_items">Home</a>
                <a href="#experience" className="nav_items">Experience</a>
                <a href="#skills" className="nav_items">Skills</a>
                <a href="#projects" className="nav_items">Projects</a>
                <a href="#contact" className="nav_items">Contact</a>
            </div>
            <div className="mobile-menu-icon" onClick={toggleMenu}>
                <b>{isOpen ? 'X' : '☰'} {/* Toggle icon */}</b>
            </div>
        </div>
    );
};

export default Navbar;
