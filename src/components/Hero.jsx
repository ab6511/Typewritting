import React from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2, FileText, Gift, Bot, Coins } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES } from '../config/whatsapp';
import FeatureCards from './FeatureCards';
import './Hero.css';

export default function Hero() {
  const handleClaimBonus = () => {
    openWhatsApp(DEFAULT_MESSAGES.welcomeBonus);
  };

  const handleScrollToCalculator = (e) => {
    e.preventDefault();
    const calcSection = document.getElementById('calculator');
    if (calcSection) {
      const navHeight = 76;
      const elementPosition = calcSection.getBoundingClientRect().top;
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
            <Bot size={15} className="hero-badge-icon" />
            <span>AI &amp; Typing Work • LLM Training • ₹400 – ₹500 / Page</span>
          </div>

          {/* Main Heading with Neon Green Emphasis */}
          <h1 className="hero-title">
            AI &amp; Typing Work: <span className="hero-highlight">Earn ₹400 – ₹500 Per Page</span><br className="hero-br" />
            Assisted By AI For LLM Training
          </h1>

          {/* Centered Description */}
          <p className="hero-description">
            Prepare, type, and verify high-accuracy text datasets to train and develop next-generation AI and Large Language Models (LLMs) for corporate leaders like <strong>Amazon</strong> and <strong>Zomato</strong>. We open your account instantly with full website portal access + guaranteed Welcome Bonus!
          </p>

          {/* Welcome Bonus Callout Banner */}
          <div className="hero-bonus-banner" onClick={handleClaimBonus} role="button" tabIndex={0}>
            <div className="bonus-icon-wrap">
              <Gift size={20} className="bonus-icon" />
            </div>
            <div className="bonus-info">
              <span className="bonus-tag">WELCOME BONUS OFFER</span>
              <span className="bonus-text">
                Instant Account Opening &amp; Website Access + <strong>₹500 Welcome Bonus</strong> Credited Today!
              </span>
            </div>
            <span className="bonus-action">
              Claim Now <ArrowRight size={14} />
            </span>
          </div>

          {/* Neon CTA Buttons */}
          <div className="hero-cta-group">
            <button
              type="button"
              className="btn btn-neon hero-btn-primary"
              onClick={handleClaimBonus}
              aria-label="Open Account & Claim Welcome Bonus"
            >
              <Gift size={18} />
              <span>Open Account &amp; Claim ₹500 Bonus</span>
              <ArrowUpRight size={18} />
            </button>

            <a
              href="#calculator"
              className="btn btn-glass hero-btn-secondary"
              onClick={handleScrollToCalculator}
              aria-label="Calculate per-page typing earnings"
            >
              <Coins size={16} />
              <span>Calculate Earnings (₹400-₹500/Page)</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Visual Showcase: Dual Device Mockup (Desktop + Phone) */}
        <div className="hero-mockup-stage">
          {/* Decorative Dot Matrix in Bottom-Left */}
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
                  <Bot size={13} />
                  <span>AI &amp; LLM Training Workstation</span>
                </span>
                <span className="window-tab">₹400 – ₹500 / Page Queue</span>
              </div>
              <div className="window-status-pill">
                <span className="live-status-dot" />
                <span>Daily Batches Active</span>
              </div>
            </div>

            {/* Mockup Workspace Content */}
            <div className="mockup-body">
              {/* Left Mini Sidebar */}
              <div className="mockup-sidebar">
                <div className="sidebar-search">
                  <span>Corporate Brand Tasks</span>
                </div>
                <div className="sidebar-item active">
                  <div className="item-avatar">AZ</div>
                  <div className="item-details">
                    <span className="item-title">Amazon E-Commerce LLM</span>
                    <span className="item-subtitle">12 Pages • ₹5,400 Paid ✓</span>
                  </div>
                </div>
                <div className="sidebar-item">
                  <div className="item-avatar">ZM</div>
                  <div className="item-details">
                    <span className="item-title">Zomato Menu OCR Typing</span>
                    <span className="item-subtitle">8 Pages • ₹3,600 Paid ✓</span>
                  </div>
                </div>
                <div className="sidebar-item">
                  <div className="item-avatar">CP</div>
                  <div className="item-details">
                    <span className="item-title">Corporate Query Training</span>
                    <span className="item-subtitle">15 Pages • ₹6,750 Paid ✓</span>
                  </div>
                </div>
              </div>

              {/* Main Work Area */}
              <div className="mockup-workspace">
                <div className="workspace-header">
                  <div className="doc-meta">
                    <span className="doc-name">Amazon_LLM_Catalog_Training_Task#849.jsonl</span>
                    <span className="doc-stat">Rate: ₹450 / Page • AI-Assisted Typing: 3x Fast</span>
                  </div>
                  <span className="verified-chip">
                    <CheckCircle2 size={13} />
                    AI Verified &amp; Approved
                  </span>
                </div>

                <div className="mockup-chat-feed">
                  <div className="chat-bubble client">
                    <p>
                      <strong>Batch Assigned:</strong> 10 Pages of OCR product attributes for Amazon &amp; Zomato LLM training models. AI auto-assist and spell-verification active.
                    </p>
                    <span className="bubble-time">Task Rate: ₹450 / Page</span>
                  </div>
                  <div className="chat-bubble freelancer">
                    <p>
                      <strong>Completed &amp; Transcribed:</strong> 10 Pages submitted and verified. Payout of <strong>₹4,500</strong> + <strong>₹500 Welcome Bonus</strong> successfully credited to UPI. Next brand batch ready!
                    </p>
                    <div className="file-attachment-chip">
                      <FileText size={16} className="file-icon" />
                      <span>Payout_Receipt_Amazon_LLM_₹4500.pdf (Credited)</span>
                    </div>
                    <span className="bubble-time">Instant UPI Transfer Sent ✓✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Mobile Smartphone Mockup */}
          <div className="phone-mockup-frame">
            <div className="phone-notch">
              <span className="camera-lens" />
              <span className="speaker-slot" />
            </div>

            <div className="phone-screen">
              <div className="phone-header">
                <span className="phone-logo">AI<span className="text-neon">Portal</span></span>
                <span className="phone-online">Active</span>
              </div>

              <div className="phone-content">
                <p className="phone-title">AI &amp; Typing Work: ₹400-₹500/pg</p>
                <div className="phone-chat-card">
                  <div className="phone-bubble">
                    <p>🎁 Account Opened! Website access granted. ₹500 Welcome Bonus added to wallet.</p>
                  </div>
                  <button
                    type="button"
                    className="phone-cta-btn"
                    onClick={handleClaimBonus}
                  >
                    <span>Claim Welcome Bonus</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Rotating Circular 100% Responsive / Guaranteed Badge */}
          <div className="circular-responsive-badge" aria-label="₹400-₹500 Per Page AI Typing">
            <div className="badge-inner-icon">
              <Coins size={22} />
            </div>
            <svg viewBox="0 0 100 100" className="badge-rotating-text">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text fontSize="8.2" fill="#00E676" letterSpacing="1.8">
                <textPath href="#circlePath">
                  • ₹400-₹500 PER PAGE • AI LLM WORK •
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
