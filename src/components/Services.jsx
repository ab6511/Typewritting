import React from 'react';
import { Keyboard, FileSpreadsheet, FileCheck, Database, ArrowRight } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES } from '../config/whatsapp';
import './Services.css';

const servicesData = [
  {
    id: 'typewriting',
    icon: Keyboard,
    title: 'Professional Typewriting',
    description:
      'High-speed typing from handwritten manuscripts, scanned pages, legal contracts, audio recordings, and books into clean, properly formatted Word documents.',
    badge: '80+ WPM Speed',
    whatsappMessage: DEFAULT_MESSAGES.typewriting,
  },
  {
    id: 'data-entry',
    icon: FileSpreadsheet,
    title: 'Excel & Data Entry',
    description:
      'Accurate data input, spreadsheet cleansing, invoice digitizing, product listings, and CRM record updates in formatted Excel or Google Sheets.',
    badge: 'Zero-Error Focus',
    whatsappMessage: DEFAULT_MESSAGES.dataEntry,
  },
  {
    id: 'conversion',
    icon: FileCheck,
    title: 'PDF to Word / Excel Conversion',
    description:
      'Flawless manual recreation and conversion of complex documents, preserving tables, margins, fonts, headers, and formulas without automatic software errors.',
    badge: 'Pixel-Perfect Layout',
    whatsappMessage: DEFAULT_MESSAGES.conversion,
  },
  {
    id: 'research',
    icon: Database,
    title: 'Web Research & Data Mining',
    description:
      'Targeted online research, company directory mining, contact extraction, and compilation of structured business datasets ready for your operations.',
    badge: 'Verified Sources',
    whatsappMessage: DEFAULT_MESSAGES.research,
  },
];

export default function Services() {
  const handleServiceInquiry = (message) => {
    openWhatsApp(message);
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="section-title">Freelance Services</h2>
          <p className="section-subtitle">
            Precision typewriting, spreadsheet management, and document formatting tailored to your deadlines.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-card-top">
                  <div className="service-icon-box">
                    <Icon size={24} className="service-icon" />
                  </div>
                  <span className="service-tag">{service.badge}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>

                <button
                  type="button"
                  className="service-learn-more"
                  onClick={() => handleServiceInquiry(service.whatsappMessage)}
                  aria-label={`Inquire about ${service.title} on WhatsApp`}
                >
                  <span>Order Service</span>
                  <ArrowRight size={16} className="learn-more-icon" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
