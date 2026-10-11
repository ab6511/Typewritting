import React from 'react';
import { FileUp, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    stepNumber: '01',
    title: 'Share your files or sample',
    description:
      'Send your handwritten pages, audio recordings, scanned PDFs, or raw data spreadsheet via WhatsApp or email.',
    icon: FileUp,
  },
  {
    stepNumber: '02',
    title: 'Get an instant quote',
    description:
      'I review your page count, formatting guidelines, and deadline to provide a transparent, budget-friendly quote.',
    icon: FileCheck,
  },
  {
    stepNumber: '03',
    title: 'Receive polished files',
    description:
      'Get your fully formatted Word documents, error-free Excel sheets, or PDFs on schedule with free minor revisions.',
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Hiring freelance support is fast and seamless. From file submission to final error-free delivery in three easy steps.
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
