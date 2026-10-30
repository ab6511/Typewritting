import React from 'react';
import { MessageCircle, Gift, ShieldCheck, Zap } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES } from '../config/whatsapp';
import './FinalCTA.css';

export default function FinalCTA() {
  const handleChatWhatsApp = () => {
    openWhatsApp(DEFAULT_MESSAGES.welcomeBonus);
  };

  return (
    <section className="final-cta-section" id="contact">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-content">
            <div className="cta-badge">
              <Gift size={15} />
              <span>Instant Account Opening &amp; Welcome Bonus</span>
            </div>

            <h2 className="final-cta-title">
              Ready to earn <span className="highlight-neon">₹400 – ₹500 Per Page</span> with AI?
            </h2>

            <p className="final-cta-description">
              We open your worker account in under 2 minutes. Get instant website portal access, claim your guaranteed <strong>₹500 Welcome Bonus</strong>, and start typing datasets for Amazon, Zomato, and global brands today!
            </p>

            <div className="final-cta-button-wrap">
              <button
                type="button"
                className="btn btn-whatsapp-cta"
                onClick={handleChatWhatsApp}
                aria-label="Open Account and Claim ₹500 Welcome Bonus on WhatsApp"
              >
                <MessageCircle size={22} />
                <span>Open Account &amp; Claim ₹500 Bonus</span>
              </button>
            </div>

            <div className="cta-trust-items">
              <div className="trust-item">
                <Gift size={16} />
                <span>₹500 Guaranteed Welcome Bonus</span>
              </div>
              <div className="trust-item">
                <Zap size={16} />
                <span>Instant Website Portal Access</span>
              </div>
              <div className="trust-item">
                <ShieldCheck size={16} />
                <span>Daily &amp; Weekly Direct UPI Payouts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
