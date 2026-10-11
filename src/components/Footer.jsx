import React from 'react';
import { Keyboard, MessageCircle, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES, WHATSAPP_NUMBER, FORMATTED_PHONE } from '../config/whatsapp';
import './Footer.css';

export default function Footer() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 72;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    openWhatsApp(DEFAULT_MESSAGES.finalCta);
  };

  return (
    <footer className="footer-root">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info */}
          <div className="footer-brand-col">
            <a href="#" className="footer-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className="logo-badge">
                <Keyboard size={20} />
              </div>
              <span className="footer-logo-text">
                <span className="footer-logo-service">Service</span>
                <span className="footer-logo-biz">Biz</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              Professional freelance typewriting, copy typing, Excel spreadsheet data entry, and PDF document conversion services. Fast turnaround and 99%+ accuracy guaranteed.
            </p>
            <div className="footer-badge-item">
              <CheckCircle2 size={16} />
              <span>Dedicated Freelance Specialist</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  Professional Typewriting
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  Excel &amp; Data Entry
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  PDF to Word / Excel
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  Web Research &amp; Mining
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#calculator" onClick={(e) => handleNavClick(e, 'calculator')}>
                  Earning Calculator
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')}>
                  Why Hire Me
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  Get Free Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & WhatsApp */}
          <div className="footer-col footer-contact-col">
            <h4 className="footer-col-title">Contact & Support</h4>
            <div className="footer-contact-list">
              <button
                type="button"
                className="footer-whatsapp-btn"
                onClick={handleWhatsAppClick}
                aria-label="Direct WhatsApp Chat"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp ({FORMATTED_PHONE})</span>
              </button>

              <div className="footer-contact-item">
                <Clock size={16} className="contact-icon" />
                <span>Mon – Sat: 8:00 AM – 10:00 PM (Rush tasks 24/7)</span>
              </div>

              <div className="footer-contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Remote Freelance Services &amp; Fast Digital Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Service Biz. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <span className="footer-note">Confidential &amp; High-Precision Freelance Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
