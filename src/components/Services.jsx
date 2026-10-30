import React from 'react';
import { Bot, FileSpreadsheet, FileCheck, Database, ArrowRight, Sparkles } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES } from '../config/whatsapp';
import './Services.css';

const servicesData = [
  {
    id: 'llm-training',
    icon: Bot,
    title: 'AI & LLM Training Typing',
    description:
      'Transcribe, type, and format training datasets for Large Language Models (LLMs) with built-in AI assistance for faster completion.',
    badge: '₹400 – ₹500 / Page',
    whatsappMessage: DEFAULT_MESSAGES.typewriting,
  },
  {
    id: 'amazon-zomato',
    icon: FileSpreadsheet,
    title: 'Amazon & Zomato Data Entry',
    description:
      'Process high-volume product catalogs, customer reviews, restaurant menus, and order transcripts for leading e-commerce & food tech brands.',
    badge: 'Daily Corporate Batches',
    whatsappMessage: DEFAULT_MESSAGES.dataEntry,
  },
  {
    id: 'ocr-digitization',
    icon: FileCheck,
    title: 'Document AI & OCR Transcription',
    description:
      'Convert scanned pages, invoices, legal records, and handwritten notes into structured text to feed corporate machine learning models.',
    badge: 'AI-Assisted Speed',
    whatsappMessage: DEFAULT_MESSAGES.conversion,
  },
  {
    id: 'prompt-annotation',
    icon: Database,
    title: 'Prompt & Response Annotation',
    description:
      'Review, label, and type prompt-response pairs used for RLHF (Reinforcement Learning from Human Feedback) model development.',
    badge: 'High Value Payout',
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
            <Sparkles size={14} />
            <span>AI Development &amp; Typing Work</span>
          </div>
          <h2 className="section-title">
            Specialized Work Batches <span className="highlight-neon">(₹400 – ₹500/Page)</span>
          </h2>
          <p className="section-subtitle">
            Work with AI-assisted software tools to complete corporate typing and LLM training batches for Amazon, Zomato, and enterprise brands.
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
                  aria-label={`Claim ${service.title} batch on WhatsApp`}
                >
                  <span>Start This Work</span>
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
