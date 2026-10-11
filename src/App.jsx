import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import EarningsCalculator from './components/EarningsCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="app-root">
      {/* Navigation Header */}
      <Navbar />

      <main>
        {/* Hero Section with Dual Device Presentation & Feature Cards */}
        <Hero />

        {/* 4 Professional Services */}
        <Services />

        {/* Interactive Earnings / Workload Calculator */}
        <EarningsCalculator />

        {/* Two-Column Why Choose Us / Why Hire Me Section */}
        <WhyChooseUs />

        {/* 3-Step How It Works Process */}
        <HowItWorks />

        {/* Client Testimonials & Social Proof */}
        <Testimonials />

        {/* Final High-Converting WhatsApp CTA */}
        <FinalCTA />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Fixed Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
