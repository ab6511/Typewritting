import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp, DEFAULT_MESSAGES } from '../config/whatsapp';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    openWhatsApp(DEFAULT_MESSAGES.floating);
  };

  return (
    <div className="whatsapp-floating-container">
      {/* Tooltip Label */}
      <span className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`}>
        Need typing or data entry? Chat now
      </span>

      {/* Circular Floating Button */}
      <button
        type="button"
        className="whatsapp-floating-btn"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Chat with freelance typist on WhatsApp"
        title="Chat on WhatsApp"
      >
        {/* Pulsing ring behind button */}
        <span className="whatsapp-pulse-ring" aria-hidden="true" />
        <MessageCircle size={32} className="whatsapp-floating-icon" />
      </button>
    </div>
  );
}
