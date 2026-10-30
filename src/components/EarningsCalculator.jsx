import React, { useState } from 'react';
import { Calculator, ArrowUpRight, Gift, CheckCircle2 } from 'lucide-react';
import { openWhatsApp } from '../config/whatsapp';
import './EarningsCalculator.css';

export default function EarningsCalculator() {
  const [pagesPerDay, setPagesPerDay] = useState(8);
  const [ratePerPage, setRatePerPage] = useState(450);
  const [daysWeekly, setDaysWeekly] = useState(6);
  const [showResults, setShowResults] = useState(true);
  const [isCalculatedAnim, setIsCalculatedAnim] = useState(false);

  // Exact formula matching: ₹400 to ₹500 per page
  // Daily = pagesPerDay * ratePerPage
  // Weekly = dailyEarnings * daysWeekly
  // Monthly = weeklyEarnings * 4.3
  // Yearly = weeklyEarnings * 52
  const dailyEarnings = pagesPerDay * ratePerPage;
  const weeklyEarnings = dailyEarnings * daysWeekly;
  const monthlyEarnings = Math.round(weeklyEarnings * 4.3);
  const yearlyEarnings = weeklyEarnings * 52;
  const welcomeBonus = 500;

  const handleCalculateClick = () => {
    setShowResults(true);
    setIsCalculatedAnim(true);
    setTimeout(() => setIsCalculatedAnim(false), 500);
  };

  const handleWhatsAppInquiry = () => {
    const message = `Hi, I calculated my typing earnings for LLM training on your website:
• Pages typed daily: ${pagesPerDay} pages/day
• Rate per page: ₹${ratePerPage}/page
• Days per week: ${daysWeekly} days/week
• Daily Earning: ₹${dailyEarnings.toLocaleString('en-IN')}
• Weekly Earning: ₹${weeklyEarnings.toLocaleString('en-IN')}
• Monthly Earning: ₹${monthlyEarnings.toLocaleString('en-IN')}
• Guaranteed Welcome Bonus: ₹${welcomeBonus}
Please open my account, provide website access, and credit my Welcome Bonus so I can get started!`;
    openWhatsApp(message);
  };

  return (
    <section className="calculator-section" id="calculator">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calculator size={15} />
            <span>Interactive Page Earning Calculator</span>
          </div>
          <h2 className="section-title">
            Calculate Your <span className="highlight-neon">Per-Page Earning!</span>
          </h2>
          <p className="section-subtitle">
            We pay ₹400 to ₹500 per page for AI-assisted typing and LLM training work. See how much you can earn!
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="calculator-card">
          <div className="calculator-header">
            <div className="calc-header-title-row">
              <h3 className="calculator-main-title">Calculate Your Typing Income</h3>
              <div className="calc-bonus-pill">
                <Gift size={14} />
                <span>+₹500 Welcome Bonus</span>
              </div>
            </div>
            <p className="calc-header-desc">
              AI-assisted typing tools allow typists to easily complete 6 to 15 pages per day.
            </p>
          </div>

          <div className="calculator-body">
            {/* Input Row 1: Pages per day */}
            <div className="calc-input-group">
              <div className="calc-label-row">
                <label htmlFor="pagesPerDay" className="calc-label">
                  Pages you can type per day:
                </label>
                <div className="calc-number-box">
                  <input
                    type="number"
                    id="pagesPerDayNum"
                    min="1"
                    max="30"
                    value={pagesPerDay}
                    onChange={(e) => setPagesPerDay(Math.max(1, Math.min(30, Number(e.target.value))))}
                    className="calc-input-number"
                  />
                  <span className="unit-label">pages</span>
                </div>
              </div>
              <div className="calc-slider-wrapper">
                <input
                  type="range"
                  id="pagesPerDay"
                  min="1"
                  max="25"
                  step="1"
                  value={pagesPerDay}
                  onChange={(e) => setPagesPerDay(Number(e.target.value))}
                  className="calc-range-slider"
                />
              </div>
            </div>

            {/* Input Row 2: Pay Rate Per Page (₹400 - ₹500) */}
            <div className="calc-input-group">
              <div className="calc-label-row">
                <label className="calc-label">
                  Select Payout Rate Per Page (₹400 – ₹500):
                </label>
                <div className="calc-number-box highlight-rate-box">
                  <span className="rate-currency">₹</span>
                  <input
                    type="number"
                    id="ratePerPageNum"
                    min="400"
                    max="500"
                    step="10"
                    value={ratePerPage}
                    onChange={(e) => setRatePerPage(Math.max(400, Math.min(500, Number(e.target.value))))}
                    className="calc-input-number"
                  />
                  <span className="unit-label">/page</span>
                </div>
              </div>
              
              {/* Preset Rate Chips for quick selection */}
              <div className="rate-preset-chips">
                {[400, 425, 450, 475, 500].map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    className={`rate-chip ${ratePerPage === rate ? 'active' : ''}`}
                    onClick={() => setRatePerPage(rate)}
                  >
                    ₹{rate} / Page
                  </button>
                ))}
              </div>

              <div className="calc-slider-wrapper">
                <input
                  type="range"
                  id="ratePerPage"
                  min="400"
                  max="500"
                  step="10"
                  value={ratePerPage}
                  onChange={(e) => setRatePerPage(Number(e.target.value))}
                  className="calc-range-slider"
                />
              </div>
            </div>

            {/* Input Row 3: Days a week */}
            <div className="calc-input-group">
              <div className="calc-label-row">
                <label htmlFor="daysWeekly" className="calc-label">
                  How many days a week you can work:
                </label>
                <div className="calc-number-box">
                  <input
                    type="number"
                    id="daysWeeklyNum"
                    min="1"
                    max="7"
                    value={daysWeekly}
                    onChange={(e) => setDaysWeekly(Math.max(1, Math.min(7, Number(e.target.value))))}
                    className="calc-input-number"
                  />
                  <span className="unit-label">days</span>
                </div>
              </div>
              <div className="calc-slider-wrapper">
                <input
                  type="range"
                  id="daysWeekly"
                  min="1"
                  max="7"
                  step="1"
                  value={daysWeekly}
                  onChange={(e) => setDaysWeekly(Number(e.target.value))}
                  className="calc-range-slider"
                />
              </div>
            </div>

            {/* Action Row: Calculate Button */}
            <div className="calc-action-row">
              <button
                type="button"
                className="btn-calculate"
                onClick={handleCalculateClick}
              >
                <span>Calculate Total Income</span>
              </button>
            </div>

            {/* Income Display Table */}
            {showResults && (
              <div className={`income-panel ${isCalculatedAnim ? 'pulse-anim' : ''}`}>
                <div className="income-header-row">
                  <h4 className="income-heading">Your Projected Income</h4>
                  <span className="income-verified-badge">
                    <CheckCircle2 size={14} />
                    Verified ₹{ratePerPage}/Page Rate
                  </span>
                </div>

                <div className="income-table">
                  {/* Row 1 Header */}
                  <div className="table-row table-header-row">
                    <div className="table-cell">Daily Earning ({pagesPerDay} pages)</div>
                    <div className="table-cell">Weekly Earning ({daysWeekly} days)</div>
                  </div>
                  {/* Row 1 Values */}
                  <div className="table-row table-value-row">
                    <div className="table-cell table-value">₹{dailyEarnings.toLocaleString('en-IN')}</div>
                    <div className="table-cell table-value">₹{weeklyEarnings.toLocaleString('en-IN')}</div>
                  </div>

                  {/* Row 2 Header */}
                  <div className="table-row table-header-row">
                    <div className="table-cell">Monthly Earning (est.)</div>
                    <div className="table-cell">Yearly Earning</div>
                  </div>
                  {/* Row 2 Values */}
                  <div className="table-row table-value-row">
                    <div className="table-cell table-value highlight-value">₹{monthlyEarnings.toLocaleString('en-IN')}</div>
                    <div className="table-cell table-value highlight-value">₹{yearlyEarnings.toLocaleString('en-IN')}</div>
                  </div>
                </div>

                {/* Instant Welcome Bonus Callout inside calculator */}
                <div className="calc-bonus-notice">
                  <div className="bonus-notice-left">
                    <div className="bonus-badge-icon">
                      <Gift size={18} />
                    </div>
                    <div>
                      <span className="bonus-notice-title">Instant Welcome Bonus Included</span>
                      <p className="bonus-notice-sub">
                        Get an extra <strong>₹500 Welcome Bonus</strong> credited to your account upon activation!
                      </p>
                    </div>
                  </div>
                  <div className="bonus-amount-badge">+₹500 BONUS</div>
                </div>

                {/* WhatsApp Next Step */}
                <div className="calc-cta-box">
                  <div className="calc-cta-info">
                    <p className="cta-headline">Ready to open account &amp; claim your ₹500 bonus?</p>
                    <p className="cta-sub">We grant immediate website access and assign your first brand typing batch.</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-neon calc-whatsapp-btn"
                    onClick={handleWhatsAppInquiry}
                  >
                    <span>Open Account &amp; Claim Bonus</span>
                    <ArrowUpRight size={17} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
