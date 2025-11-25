'use client';

import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'services', 'packages', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => scrollToSection('home')}>
          <span className={styles.logoIcon}>🏖️</span>
          <span className={styles.logoText}>
            <strong>SunBeach</strong> Tourism
          </span>
        </div>

        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          <li><a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? styles.activeLink : ''}>Home</a></li>
          <li><a onClick={() => scrollToSection('services')} className={activeSection === 'services' ? styles.activeLink : ''}>Services</a></li>
          <li><a onClick={() => scrollToSection('packages')} className={activeSection === 'packages' ? styles.activeLink : ''}>Packages</a></li>
          <li><a onClick={() => scrollToSection('about')} className={activeSection === 'about' ? styles.activeLink : ''}>About</a></li>
          <li><a onClick={() => scrollToSection('testimonials')} className={activeSection === 'testimonials' ? styles.activeLink : ''}>Testimonials</a></li>
          <li><a onClick={() => scrollToSection('contact')} className={styles.ctaLink}>Contact</a></li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
