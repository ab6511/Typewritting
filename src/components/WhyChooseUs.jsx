import React from 'react';
import { UserCheck, Zap, DollarSign, ShieldCheck, MessageCircle, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../config/whatsapp';
import './WhyChooseUs.css';

const benefits = [
  {
    icon: UserCheck,
    title: 'Meticulous Accuracy',
    description:
      'Double-checked entries, manual proofreading, and spell-checking ensure your final documents are 100% clean and error-free.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description:
      'Prompt project delivery with rush same-day options available for urgent deadlines, submissions, and business filings.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Clear, budget-friendly per-page or per-hour pricing with upfront quotes. No hidden extras or agency markups.',
  },
  {
    icon: ShieldCheck,
    title: 'Guaranteed Confidentiality',
    description:
      'Strict confidentiality protocols to safeguard your business datasets, personal manuscripts, and sensitive records.',
  },
];

const stats = [
  { value: '80+ WPM', label: 'Typing Speed' },
  { value: '99.9%', label: 'Accuracy Rate' },
  { value: '500+', label: 'Delivered Projects' },
];

export default function WhyChooseUs() {
  const handleConsultClick = () => {
    openWhatsApp('Hi, I want to discuss a typewriting / data entry project and check your availability.');
  };

  return (
    <section className="why-us-section" id="why-us">
      <div className="container">
        <div className="why-us-grid">
          {/* Left Column: Story & Trust */}
          <div className="why-us-left">
            <div className="section-badge">
              <CheckCircle2 size={15} />
              <span>Dedicated Solo Freelancer</span>
            </div>
            
            <h2 className="why-us-title">
              Why hire a dedicated <br className="why-us-br" />
              freelance specialist?
            </h2>

            <p className="why-us-description">
              No agency overhead or junior delegation. You work one-on-one with a detail-oriented professional who ensures every single word, table, and data row is captured with surgical precision.
            </p>

            {/* Quick Stats Grid */}
            <div className="why-us-stats">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="why-us-action">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleConsultClick}
              >
                <MessageCircle size={18} />
                <span>Hire Me on WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4 Key Benefits */}
          <div className="why-us-right">
            <div className="benefits-list">
              {benefits.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="benefit-item">
                    <div className="benefit-icon-wrapper">
                      <Icon size={22} className="benefit-icon" />
                    </div>
                    <div className="benefit-content">
                      <h3 className="benefit-title">{item.title}</h3>
                      <p className="benefit-desc">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
