import React from 'react';
import { Sparkles, MessageCircle, ArrowUpRight, ArrowRight, ShieldCheck, CheckCircle2, FileText, Smartphone, Laptop } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES } from '../config/whatsapp';
import FeatureCards from './FeatureCards';
import './Hero.css';

export default function Hero() {
  const handlePrimaryQuote = () => {
    openWhatsApp(DEFAULT_MESSAGES.hero);
  };

  const handleExploreServices = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const navHeight = 76;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background Radial Glows */}
      <div className="hero-ambient-glow" aria-hidden="true" />
      <div className="hero-bottom-left-glow" aria-hidden="true" />
      <div className="hero-bottom-right-glow" aria-hidden="true" />

      <div className="container hero-container">
        {/* Top Centered Content */}
        <div className="hero-header-wrap">
          {/* Pill Badge at the top */}
          <div className="hero-badge">
            <span className="badge-pulse-dot" />
            <Sparkles size={15} className="hero-badge-icon" />
            <span>Professional Freelance Specialist</span>
          </div>

          {/* Main Heading with Neon Green Emphasis (like reference) */}
          <h1 className="hero-title">
            Fast <span className="hero-highlight">typewriting &amp; accurate</span><br className="hero-br" />
            data entry for your work
          </h1>

          {/* Centered Description */}
          <p className="hero-description">
            From rush copy typing and handwritten document transcription to large-scale Excel spreadsheets, I deliver 100% error-free precision, clean formatting, and confidential turnaround you can rely on.
          </p>

          {/* Neon CTA Buttons */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-neon hero-btn-primary"
              onClick={handlePrimaryQuote}
              aria-label="Get a Free Quote via WhatsApp"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight size={18} />
            </button>

            <a
              href="#services"
              className="btn btn-glass hero-btn-secondary"
              onClick={handleExploreServices}
              aria-label="Explore freelance services"
            >
              <span>Explore Services</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Visual Showcase: Dual Device Mockup (Desktop + Phone) from reference */}
        <div className="hero-mockup-stage">
          {/* Decorative Dot Matrix in Bottom-Left (matching reference) */}
          <div className="dot-matrix-decor" aria-hidden="true">
            {[...Array(20)].map((_, i) => (
              <span key={i} />
            ))}
          </div>

          {/* Desktop Workstation Mockup */}
          <div className="desktop-mockup-card">
            {/* Window Topbar */}
            <div className="mockup-topbar">
              <div className="window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="window-title">
                <span className="window-tab active">
                  <FileText size={13} />
                  <span>Typewriting &amp; Data Entry Hub</span>
                </span>
                <span className="window-tab">WhatsApp Workstation</span>
              </div>
              <div className="window-status-pill">
                <span className="live-status-dot" />
                <span>Online &amp; Taking Orders</span>
              </div>
            </div>

            {/* Mockup Workspace Content */}
            <div className="mockup-body">
              {/* Left Mini Sidebar */}
              <div className="mockup-sidebar">
                <div className="sidebar-search">
                  <span>Recent Work Orders</span>
                </div>
                <div className="sidebar-item active">
                  <div className="item-avatar">RS</div>
                  <div className="item-details">
                    <span className="item-title">Dr. Rajesh Sharma</span>
                    <span className="item-subtitle">180p Manuscript • Delivered ✓</span>
                  </div>
                </div>
                <div className="sidebar-item">
                  <div className="item-avatar">PK</div>
                  <div className="item-details">
                    <span className="item-title">Priya Kapoor</span>
                    <span className="item-subtitle">2,500 SKU Excel • Cleaned ✓</span>
                  </div>
                </div>
                <div className="sidebar-item">
                  <div className="item-avatar">AV</div>
                  <div className="item-details">
                    <span className="item-title">Amit Verma Advocate</span>
                    <span className="item-subtitle">Court Petition • Fast 6h ✓</span>
                  </div>
                </div>
              </div>

              {/* Main Work Area */}
              <div className="mockup-workspace">
                <div className="workspace-header">
                  <div className="doc-meta">
                    <span className="doc-name">Project_Documentation_Final.docx</span>
                    <span className="doc-stat">Speed: 82 WPM • Accuracy: 99.9%</span>
                  </div>
                  <span className="verified-chip">
                    <CheckCircle2 size={13} />
                    Verified Formatted
                  </span>
                </div>

                <div className="mockup-chat-feed">
                  <div className="chat-bubble client">
                    <p>Hi, I need this 45-page scanned report typed into editable Word with all table columns preserved by tomorrow morning.</p>
                    <span className="bubble-time">10:14 AM</span>
                  </div>
                  <div className="chat-bubble freelancer">
                    <p>Done! Your documents have been typed, proofread, and formatted with zero errors. Word &amp; PDF files are attached below.</p>
                    <div className="file-attachment-chip">
                      <FileText size={16} className="file-icon" />
                      <span>Document_Final_Proofread.docx (Ready)</span>
                    </div>
                    <span className="bubble-time">04:30 PM • Sent ✓✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Mobile Smartphone Mockup (like reference) */}
          <div className="phone-mockup-frame">
            <div className="phone-notch">
              <span className="camera-lens" />
              <span className="speaker-slot" />
            </div>

            <div className="phone-screen">
              <div className="phone-header">
                <span className="phone-logo">Service<span className="text-neon">Biz</span></span>
                <span className="phone-online">Active</span>
              </div>

              <div className="phone-content">
                <p className="phone-title">Fast Typewriting &amp; Data Entry</p>
                <div className="phone-chat-card">
                  <div className="phone-bubble">
                    <p>WhatsApp Quote Confirmed: 100% accuracy delivered on schedule.</p>
                  </div>
                  <button
                    type="button"
                    className="phone-cta-btn"
                    onClick={handlePrimaryQuote}
                  >
                    <span>Hire on WhatsApp</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Rotating Circular 100% Responsive / Guaranteed Badge (like reference) */}
          <div className="circular-responsive-badge" aria-label="100% Accurate & Responsive">
            <div className="badge-inner-icon">
              <Smartphone size={22} />
            </div>
            <svg viewBox="0 0 100 100" className="badge-rotating-text">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text fontSize="8.5" fill="#00E676" letterSpacing="2">
                <textPath href="#circlePath">
                  • 100% ACCURATE • FAST DELIVERY •
                </textPath>
              </text>
            </svg>
          </div>
        </div>

        {/* 3 Horizontal Feature Cards */}
        <FeatureCards />
      </div>
    </section>
  );
}
