import React from 'react';
import { CheckCircle2, Sparkles, Building2 } from 'lucide-react';
import './TrustLogos.css';

const corporateBrands = [
  {
    id: 'amazon',
    name: 'Amazon',
    badge: 'E-Commerce LLM Training',
    tagline: 'Catalog Annotation & Product Descriptions',
    rate: '₹400 – ₹500 / Page',
    logoSvg: (
      <svg viewBox="0 0 120 36" fill="currentColor" className="brand-svg amazon-svg">
        <text x="5" y="24" fontSize="22" fontWeight="800" fontFamily="sans-serif" fill="#FFFFFF" letterSpacing="-0.5">amazon</text>
        <path d="M 12 28 Q 45 38 72 28" fill="none" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round" />
        <path d="M 68 25 L 75 28 L 71 33 Z" fill="#FF9900" />
      </svg>
    ),
    color: '#FF9900',
  },
  {
    id: 'zomato',
    name: 'Zomato',
    badge: 'Menu OCR & AI Digitization',
    tagline: 'Restaurant Food Menus & Query Datasets',
    rate: '₹400 – ₹500 / Page',
    logoSvg: (
      <svg viewBox="0 0 120 36" fill="currentColor" className="brand-svg zomato-svg">
        <text x="6" y="25" fontSize="24" fontStyle="italic" fontWeight="900" fontFamily="sans-serif" fill="#E23744" letterSpacing="-0.8">zomato</text>
      </svg>
    ),
    color: '#E23744',
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    badge: 'Catalog & Search NLP',
    tagline: 'Item Metadata & Attribute Formatting',
    rate: '₹400 – ₹500 / Page',
    logoSvg: (
      <svg viewBox="0 0 120 36" fill="currentColor" className="brand-svg flipkart-svg">
        <text x="6" y="25" fontSize="22" fontWeight="800" fontFamily="sans-serif" fill="#2874F0" letterSpacing="-0.5">Flipkart</text>
        <path d="M 94 8 L 104 8 L 102 24 L 92 24 Z" fill="#FFE500" opacity="0.9" />
      </svg>
    ),
    color: '#2874F0',
  },
  {
    id: 'swiggy',
    name: 'Swiggy',
    badge: 'Hyperlocal Data Processing',
    tagline: 'Delivery Slips & Store Catalog Verification',
    rate: '₹400 – ₹500 / Page',
    logoSvg: (
      <svg viewBox="0 0 120 36" fill="currentColor" className="brand-svg swiggy-svg">
        <text x="6" y="25" fontSize="23" fontWeight="800" fontFamily="sans-serif" fill="#FC8019" letterSpacing="-0.5">SWIGGY</text>
      </svg>
    ),
    color: '#FC8019',
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    badge: 'Enterprise AI & Copilot',
    tagline: 'Document AI & Multilingual LLM Benchmark Data',
    rate: '₹400 – ₹500 / Page',
    logoSvg: (
      <svg viewBox="0 0 130 36" fill="currentColor" className="brand-svg microsoft-svg">
        <rect x="6" y="8" width="9" height="9" fill="#F25022" />
        <rect x="17" y="8" width="9" height="9" fill="#7FBA00" />
        <rect x="6" y="19" width="9" height="9" fill="#00A4EF" />
        <rect x="17" y="19" width="9" height="9" fill="#FFB900" />
        <text x="32" y="24" fontSize="17" fontWeight="600" fontFamily="sans-serif" fill="#FFFFFF">Microsoft</text>
      </svg>
    ),
    color: '#00A4EF',
  },
  {
    id: 'corporate-ai',
    name: 'Global Corporates',
    badge: 'LLM Fine-Tuning Labs',
    tagline: 'Prompt-Response Pairs & Data Labeling',
    rate: '₹400 – ₹500 / Page',
    logoSvg: (
      <div className="brand-generic-badge">
        <Building2 size={20} className="corp-icon" />
        <span className="corp-text">Enterprise Partners</span>
      </div>
    ),
    color: '#00E676',
  },
];

export default function TrustLogos() {
  return (
    <section className="trust-logos-section" id="corporate-partners">
      <div className="container">
        <div className="trust-logos-header">
          <div className="trust-pill">
            <Sparkles size={14} className="trust-pill-icon" />
            <span>WORK WITH LEADING CORPORATE BRANDS</span>
          </div>
          <h2 className="trust-logos-title">
            AI &amp; Typing Tasks For <span className="highlight-neon">Amazon, Zomato</span> &amp; Enterprise Brands
          </h2>
          <p className="trust-logos-description">
            Prepare, transcribe, and verify specialized datasets used to train next-generation LLMs and commercial AI models. High volume with guaranteed ₹400 – ₹500 per page compensation.
          </p>
        </div>

        <div className="trust-logos-grid">
          {corporateBrands.map((brand) => (
            <div key={brand.id} className="trust-logo-card">
              <div className="brand-card-top">
                <span className="brand-badge-pill">{brand.badge}</span>
                <span className="brand-verified-chip">
                  <CheckCircle2 size={13} />
                  Active
                </span>
              </div>

              <div className="logo-img-wrapper">
                {brand.logoSvg}
              </div>

              <div className="logo-meta">
                <span className="logo-title">{brand.name}</span>
                <span className="logo-tagline">{brand.tagline}</span>
              </div>

              <div className="brand-payout-box">
                <span className="payout-label">Guaranteed Payout</span>
                <span className="payout-value">{brand.rate}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
