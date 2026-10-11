import React from 'react';
import './TrustLogos.css';

const logosData = [
  {
    id: 'digital-india',
    name: 'Digital India',
    tagline: 'Power To Empower',
    file: 'logos/digital-india.png',
  },
  {
    id: 'make-in-india',
    name: 'Make in India',
    tagline: 'Digital Innovation',
    file: 'logos/make-in-india.png',
  },
  {
    id: 'rojgar-bharat',
    name: 'Rojgar Bharat',
    tagline: 'Employment Initiative',
    file: 'logos/rojgar-bharat.png',
  },
  {
    id: 'swachh-bharat',
    name: 'Swachh Bharat',
    tagline: 'Digital Governance',
    file: 'logos/swachh-bharat.png',
  },
];

export default function TrustLogos() {
  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <section className="trust-logos-section">
      <div className="container">
        <div className="trust-logos-header">
          <span className="trust-logos-subtitle">
            • SUPPORTING NATIONAL DIGITAL INITIATIVES •
          </span>
          <h3 className="trust-logos-title">
            Empowering India&apos;s Digital Documentation &amp; Employment
          </h3>
        </div>

        <div className="trust-logos-grid">
          {logosData.map((logo) => (
            <div key={logo.id} className="trust-logo-card">
              <div className="logo-img-wrapper">
                <img
                  src={`${baseUrl}${logo.file}`}
                  alt={logo.name}
                  className="trust-logo-img"
                  loading="lazy"
                />
              </div>
              <div className="logo-meta">
                <span className="logo-title">{logo.name}</span>
                <span className="logo-tagline">{logo.tagline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
