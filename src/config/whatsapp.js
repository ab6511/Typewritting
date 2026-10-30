/**
 * Central WhatsApp Configuration
 * Update the phone number here to update all WhatsApp CTAs across the entire website.
 * Format: Country code followed by phone number with no '+' or dashes, e.g. "919876543210"
 */
export const WHATSAPP_NUMBER = "9876543210";
export const FORMATTED_PHONE = "+91 98765 43210";

export const DEFAULT_MESSAGES = {
  quote: "Hi, I want to start AI & typing work for LLM training at ₹400-₹500/page. Please open my account and share website access details.",
  header: "Hi, I want to open my worker account, get website access, and claim my ₹500 Welcome Bonus for AI typing work.",
  hero: "Hi, I am interested in AI and typing work for LLM training (₹400-₹500 per page). Please open my account and give me website access.",
  finalCta: "Hi, I am ready to start typing work for corporate brands like Amazon and Zomato. Please open my account, grant website access, and credit my Welcome Bonus.",
  floating: "Hi, I want to join the AI typing & LLM training program and claim the Welcome Bonus.",
  welcomeBonus: "Hi, I am ready to open my account and claim the ₹500 Welcome Bonus + website portal access.",
  typewriting: "Hi, I want to do AI-assisted typewriting & LLM training tasks at ₹400-₹500 per page.",
  dataEntry: "Hi, I want to work on Amazon & Zomato data entry and corporate transcription projects.",
  conversion: "Hi, I want to work on PDF/OCR text conversion and document digitizing for corporate brands.",
  research: "Hi, I want to work on AI prompt annotation and corporate dataset labeling.",
};

/**
 * Returns direct WhatsApp click-to-chat URL with prefilled message.
 * Automatically normalizes 10-digit Indian numbers with the 91 country code
 * so WhatsApp routes to India (+91) rather than Indonesia (+62).
 * @param {string} message - Pre-filled message content
 * @returns {string} Direct URL
 */
export const getWhatsAppUrl = (message = DEFAULT_MESSAGES.hero) => {
  const digits = String(WHATSAPP_NUMBER).replace(/\D/g, "");
  const apiNumber = digits.length === 10 ? `91${digits}` : digits;
  return `https://api.whatsapp.com/send?phone=${apiNumber}&text=${encodeURIComponent(message)}`;
};

/**
 * Opens WhatsApp in a new tab with a pre-filled message directly in the chat with your number.
 * @param {string} message - The text message to prefill in WhatsApp chat
 */
export const openWhatsApp = (message = DEFAULT_MESSAGES.hero) => {
  const url = getWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
};
