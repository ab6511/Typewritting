import React from 'react';
import { UserCheck, Gift, Coins, ArrowRight, Sparkles } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    stepNumber: '01',
    title: 'Open Account & Get Website Access',
    description:
      'We set up your worker profile in under 2 minutes and provide full access credentials to the AI typing & LLM training portal.',
    icon: UserCheck,
  },
  {
    stepNumber: '02',
    title: 'Claim ₹500 Welcome Bonus & Pick Batches',
    description:
      'Your ₹500 Welcome Bonus is immediately credited. Browse active typing tasks from Amazon, Zomato, and global corporate brands.',
    icon: Gift,
  },
  {
    stepNumber: '03',
    title: 'Type with AI & Earn ₹400 – ₹500 / Page',
    description:
      'Use built-in AI assistance to complete pages 3x faster. Get daily or weekly direct transfers directly to your UPI ID or Bank account.',
    icon: Coins,
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Fast &amp; Easy 3-Step Start</span>
          </div>
          <h2 className="section-title">How To Start Working &amp; Earning</h2>
          <p className="section-subtitle">
            Get your account opened, claim your ₹500 Welcome Bonus, and begin AI-assisted typing work today.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="steps-container">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="step-card-wrapper">
                <div className="step-card">
                  <div className="step-header">
                    <span className="step-number">{step.stepNumber}</span>
                    <div className="step-icon-wrap">
                      <Icon size={20} className="step-icon" />
                    </div>
                  </div>

                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="step-connector" aria-hidden="true">
                    <ArrowRight size={20} className="connector-arrow" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
