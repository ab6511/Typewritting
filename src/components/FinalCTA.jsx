import React from 'react';
import { MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES } from '../config/whatsapp';
import './FinalCTA.css';

export default function FinalCTA() {
  const handleChatWhatsApp = () => {
    openWhatsApp(DEFAULT_MESSAGES.finalCta);
  };

  return (
    <section className="final-cta-section" id="contact">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-content">
            <div className="cta-badge">
              <Clock size={15} />
              <span>Available for New Projects</span>
            </div>

            <h2 className="final-cta-title">
              Need help with your next project?
            </h2>

            <p className="final-cta-description">
              Send your files or requirements on WhatsApp for an immediate quote and fast turnaround.
            </p>

            <div className="final-cta-button-wrap">
              <button
                type="button"
                className="btn btn-whatsapp-cta"
                onClick={handleChatWhatsApp}
                aria-label="Chat on WhatsApp with freelance typist"
              >
                <MessageCircle size={22} />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            <div className="cta-trust-items">
              <div className="trust-item">
                <ShieldCheck size={16} />
                <span>Free Initial Page Sample / Estimate</span>
              </div>
              <div className="trust-item">
                <Clock size={16} />
                <span>Replies in &lt;15 Mins via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
