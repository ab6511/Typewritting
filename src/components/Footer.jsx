import React from 'react';
import { Keyboard, MessageCircle, Clock, Gift, CheckCircle2 } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES } from '../config/whatsapp';
import './Footer.css';

const CURRENT_YEAR = 2026;

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
    openWhatsApp(DEFAULT_MESSAGES.welcomeBonus);
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
                <span className="footer-logo-service">AI</span>
                <span className="footer-logo-biz">TypingHub</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              AI-assisted typewriting and dataset preparation for Large Language Model (LLM) training. Earn ₹400 to ₹500 per page working on datasets for Amazon, Zomato, and global corporate brands.
            </p>
            <div className="footer-badge-item">
              <Gift size={16} />
              <span>₹500 Instant Welcome Bonus on Day 1</span>
            </div>
          </div>

          {/* Column 2: Work Batches */}
          <div className="footer-col">
            <h4 className="footer-col-title">Work Batches</h4>
            <ul className="footer-links">
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  AI &amp; LLM Training Typing
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  Amazon &amp; Zomato Data Entry
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  Document AI &amp; OCR Formatting
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>
                  Prompt &amp; Response Annotation
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#corporate-partners" onClick={(e) => handleNavClick(e, 'corporate-partners')}>
                  Corporate Brands
                </a>
              </li>
              <li>
                <a href="#calculator" onClick={(e) => handleNavClick(e, 'calculator')}>
                  ₹400-₹500/Page Calculator
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')}>
                  Account Opening &amp; Access
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>
                  Worker Reviews (8 Verified)
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
                  Claim Welcome Bonus
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="footer-col">
            <h4 className="footer-col-title">Worker Support</h4>
            <div className="footer-contact-items">
              <div className="contact-item">
                <Clock size={16} className="contact-icon" />
                <span>Immediate WhatsApp Account Activation</span>
              </div>
              <div className="contact-item">
                <CheckCircle2 size={16} className="contact-icon" />
                <span>Daily &amp; Weekly Direct UPI Disbursements</span>
              </div>
            </div>
            <button
              type="button"
              className="btn btn-neon footer-cta-btn"
              onClick={handleWhatsAppClick}
              aria-label="Claim ₹500 Welcome Bonus on WhatsApp"
            >
              <MessageCircle size={16} />
              <span>Claim ₹500 Bonus</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; {CURRENT_YEAR} AI TypingHub • AI &amp; LLM Training Work Network. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#hero" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              Back to Top &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
