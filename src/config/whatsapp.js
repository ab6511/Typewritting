/**
 * Central WhatsApp Configuration
 * Update the phone number here to update all WhatsApp CTAs across the entire website.
 * Format: Country code followed by phone number with no '+' or dashes, e.g. "919876543210"
 */
export const WHATSAPP_NUMBER = "6299728634";
export const FORMATTED_PHONE = "+91 62997 28634";

export const DEFAULT_MESSAGES = {
  quote: "Hi, I have a typewriting / data entry project and would like to get a quote. Please share your rates and turnaround time.",
  header: "Hi, I would like to get a quote for my typing or data entry work.",
  hero: "Hi, I saw your portfolio and need professional typewriting / data entry assistance. Please share more details.",
  finalCta: "Hi, I have a project ready for typewriting / data entry and would like to hire your freelance services.",
  floating: "Hi, I need quick assistance with typewriting or data entry work.",
  typewriting: "Hi, I have documents that require fast and accurate typewriting/copy typing.",
  dataEntry: "Hi, I have an Excel / spreadsheet data entry project that needs accurate processing.",
  conversion: "Hi, I need PDF / scanned image conversion into editable Word/Excel formats.",
  research: "Hi, I need help with web research and data extraction into a structured sheet.",
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
