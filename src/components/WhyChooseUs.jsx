import React from 'react';
import { Coins, Zap, Gift, Bot, MessageCircle, CheckCircle2 } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES } from '../config/whatsapp';
import './WhyChooseUs.css';

const benefits = [
  {
    icon: Coins,
    title: 'Highest Market Pay: ₹400 – ₹500 / Page',
    description:
      'Earn top rates for preparing and typing training datasets for AI and Large Language Models with zero delays in payout.',
  },
  {
    icon: Zap,
    title: 'More & More Work Continuously',
    description:
      'Never run out of work. As soon as you submit a batch for Amazon or Zomato, the next corporate dataset is immediately assigned.',
  },
  {
    icon: Gift,
    title: 'Guaranteed ₹500 Welcome Bonus',
    description:
      'We open your account in 2 minutes and credit a ₹500 Welcome Bonus directly into your worker wallet on day 1.',
  },
  {
    icon: Bot,
    title: 'Assisted By Smart AI Tools',
    description:
      'Our website portal includes AI-assisted typing and error-checking tools so you complete pages 3x faster with 100% accuracy.',
  },
];

const stats = [
  { value: '₹400 – ₹500', label: 'Per Page Pay' },
  { value: '₹500', label: 'Welcome Bonus' },
  { value: '24/7', label: 'Work Flow Available' },
];

export default function WhyChooseUs() {
  const handleConsultClick = () => {
    openWhatsApp(DEFAULT_MESSAGES.welcomeBonus);
  };

  return (
    <section className="why-us-section" id="why-us">
      <div className="container">
        <div className="why-us-grid">
          {/* Left Column: Story & Trust */}
          <div className="why-us-left">
            <div className="section-badge">
              <CheckCircle2 size={15} />
              <span>Verified AI Typing Platform</span>
            </div>
            
            <h2 className="why-us-title">
              Why work with our <br className="why-us-br" />
              AI training network?
            </h2>

            <p className="why-us-description">
              Leading tech companies and corporate giants like Amazon and Zomato rely on our network to train their next-generation AI and LLM models. We ensure our typists get paid the highest industry rates, receive instant account access, and always have unlimited work.
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
                <span>Open Account &amp; Claim Bonus</span>
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
