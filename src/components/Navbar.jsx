import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Keyboard } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES } from '../config/whatsapp';
import './Navbar.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 76;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleQuoteClick = () => {
    setIsMobileMenuOpen(false);
    openWhatsApp(DEFAULT_MESSAGES.header);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Logo */}
        <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <div className="logo-badge">
            <Keyboard className="logo-icon" size={19} />
          </div>
          <span className="logo-text">
            <span className="logo-service">Service</span>
            <span className="logo-biz">Biz</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-nav" aria-label="Main navigation">
          <a
            href="#services"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#calculator"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'calculator')}
          >
            Calculator
          </a>
          <a
            href="#why-us"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'why-us')}
          >
            Why Hire Me
          </a>
          <a
            href="#how-it-works"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'how-it-works')}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'testimonials')}
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
        </nav>

        {/* Right Desktop CTA: Neon Green Button with arrow like reference */}
        <div className="navbar-action desktop-action">
          <button
            type="button"
            className="btn btn-neon nav-quote-btn"
            onClick={handleQuoteClick}
            aria-label="Get a Quote via WhatsApp"
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={17} className="btn-arrow" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-toggle-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links" aria-label="Mobile navigation">
          <a
            href="#services"
            className="mobile-nav-link"
            onClick={(e) => handleNavClick(e, 'services')}
          >
            Services
          </a>
          <a
            href="#calculator"
            className="mobile-nav-link"
            onClick={(e) => handleNavClick(e, 'calculator')}
          >
            Calculator
          </a>
          <a
            href="#why-us"
            className="mobile-nav-link"
            onClick={(e) => handleNavClick(e, 'why-us')}
          >
            Why Hire Me
          </a>
          <a
            href="#how-it-works"
            className="mobile-nav-link"
            onClick={(e) => handleNavClick(e, 'how-it-works')}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="mobile-nav-link"
            onClick={(e) => handleNavClick(e, 'testimonials')}
          >
            Reviews
          </a>
          <a
            href="#contact"
            className="mobile-nav-link"
            onClick={(e) => handleNavClick(e, 'contact')}
          >
            Contact
          </a>
          
          <div className="mobile-action-wrap">
            <button
              type="button"
              className="btn btn-neon btn-full"
              onClick={handleQuoteClick}
            >
              <span>Get a Quote</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
