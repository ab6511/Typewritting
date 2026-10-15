# Service Biz — Typewriting & Data Entry Freelancer Landing Page

A modern, responsive, high-converting static business landing page for a professional **Typewriting, Copy Typing, and Data Entry Freelancer**.

Built with **React**, **Vite**, and **Vanilla CSS** with a sleek dark cyber-neon aesthetic inspired by modern Behance & WhatsApp Web landing page designs.

---

## 🚀 Features

- **Cyber-Neon Dark Aesthetic**: Deep obsidian theme with ambient neon emerald green radial lighting, glassmorphism, and subtle glow effects.
- **Dual Device Hero Showcase**: Desktop application window mockup alongside an angled 3D floating smartphone frame and an animated circular rotating badge.
- **Interactive Earnings Calculator**:
  - Live estimation for typing volume, daily hours, and weekly days.
  - Linked range sliders and number input boxes.
  - 2×2 **"Your Income"** breakdown table calculating Daily, Weekly, Monthly, and Yearly earnings.
- **Freelance Services Section**:
  - Professional Typewriting (80+ WPM)
  - Excel & Data Entry (Spreadsheet Pro)
  - PDF to Word / Excel Conversion (Pixel-Perfect Layout)
  - Web Research & Data Mining (Verified Sources)
- **Central WhatsApp Integration**:
  - Direct WhatsApp click-to-chat API (`+91 98765 43210`).
  - Pre-filled custom messages for every CTA and calculator breakdown.
  - Fixed floating WhatsApp action button with animated pulse ring.
- **Client Testimonials & Social Proof**: Realistic customer reviews with 5-star ratings and verified client badges.
- **Why Hire Me & How It Works**: Transparent 3-step workflow and trust metrics (80+ WPM, 99.9% accuracy, 500+ projects).
- **Fully Responsive**: Optimized for desktop, tablet, and mobile with a custom navigation drawer.

---

## 🛠️ Tech Stack

- **Frontend**: React 18 / 19
- **Bundler & Dev Server**: Vite
- **Styling**: Vanilla CSS (Custom Design System with CSS Variables)
- **Icons**: Lucide React
- **Typography**: Inter (Google Fonts)

---

## 💻 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/ab6511/Typewritting.git
cd Typewritting
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

The app will be accessible at `http://localhost:5173/`.

### 4. Build for production
```bash
npm run build
```

---

## 📞 Configuration

To change the contact WhatsApp number across the entire site, simply update `WHATSAPP_NUMBER` in `src/config/whatsapp.js`:

```javascript
export const WHATSAPP_NUMBER = "9876543210";
export const FORMATTED_PHONE = "+91 98765 43210";
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
