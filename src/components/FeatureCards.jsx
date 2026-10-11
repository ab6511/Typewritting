import React from 'react';
import { ShieldCheck, Zap, Lock } from 'lucide-react';
import './FeatureCards.css';

const features = [
  {
    id: 'accuracy',
    icon: ShieldCheck,
    title: '99%+ Accuracy',
    description: 'Meticulous proofreading and zero-error promise for all documents.',
  },
  {
    id: 'rapid-delivery',
    icon: Zap,
    title: 'Express turnaround',
    description: 'Rush same-day delivery available for urgent typing and data tasks.',
  },
  {
    id: 'confidential',
    icon: Lock,
    title: '100% Confidential',
    description: 'Strict data privacy and confidentiality for sensitive records.',
  },
];

export default function FeatureCards() {
  return (
    <div className="feature-cards-grid">
      {features.map((feature) => {
        const IconComponent = feature.icon;
        return (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon-wrapper">
              <IconComponent size={20} className="feature-icon" />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
