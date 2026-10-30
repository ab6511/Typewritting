import { Coins, Bot, Gift } from 'lucide-react';
import './FeatureCards.css';

const features = [
  {
    id: 'payout-rate',
    icon: Coins,
    title: '₹400 – ₹500 Per Page',
    description: 'Guaranteed top industry rates with daily and weekly direct UPI/bank payouts.',
  },
  {
    id: 'ai-assisted',
    icon: Bot,
    title: 'AI-Assisted LLM Training',
    description: 'Train cutting-edge AI models for Amazon, Zomato & top corporate brands with smart AI tools.',
  },
  {
    id: 'welcome-bonus',
    icon: Gift,
    title: 'Account Access + Welcome Bonus',
    description: 'Instant account setup, immediate website portal access, and ₹500 Welcome Bonus credited.',
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
