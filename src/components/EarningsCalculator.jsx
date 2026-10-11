import React, { useState } from 'react';
import { Calculator, ArrowUpRight } from 'lucide-react';
import { openWhatsApp } from '../config/whatsapp';
import './EarningsCalculator.css';

export default function EarningsCalculator() {
  const [dataPerHour, setDataPerHour] = useState(60);
  const [hoursDaily, setHoursDaily] = useState(8);
  const [daysWeekly, setDaysWeekly] = useState(7);
  const [showResults, setShowResults] = useState(true);
  const [isCalculatedAnim, setIsCalculatedAnim] = useState(false);

  // Exact formula matching the screenshot benchmark:
  // (60 data/hr * 8 hrs/day) = ₹480 Daily Earning (₹1 per data unit)
  // (₹480 * 7 days/wk) = ₹3,360 Weekly Earning
  // (₹3,360 * 4.3 weeks/mo) = ₹14,448 Monthly Earning
  // (₹3,360 * 52 weeks/yr) = ₹174,720 Yearly Earning
  const dailyEarnings = dataPerHour * hoursDaily;
  const weeklyEarnings = dailyEarnings * daysWeekly;
  const monthlyEarnings = Math.round(weeklyEarnings * 4.3);
  const yearlyEarnings = weeklyEarnings * 52;

  const handleCalculateClick = () => {
    setShowResults(true);
    setIsCalculatedAnim(true);
    setTimeout(() => setIsCalculatedAnim(false), 500);
  };

  const handleWhatsAppInquiry = () => {
    const message = `Hi, I calculated my typing & data entry workload on your website:
• Typing rate: ${dataPerHour} data/hr
• Daily hours: ${hoursDaily} hrs/day
• Weekly days: ${daysWeekly} days/week
• Daily Earning: ₹${dailyEarnings}
• Weekly Earning: ₹${weeklyEarnings}
• Monthly Earning: ₹${monthlyEarnings}
• Yearly Earning: ₹${yearlyEarnings}
I would like to discuss this and get started!`;
    openWhatsApp(message);
  };

  return (
    <section className="calculator-section" id="calculator">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Calculator size={15} />
            <span>Interactive Estimator</span>
          </div>
          <h2 className="section-title">
            Calculate Your <span className="highlight-neon">Earning!</span>
          </h2>
          <p className="section-subtitle">
            Accurate estimation matching your typing speed and available working schedule.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="calculator-card">
          <div className="calculator-header">
            <h3 className="calculator-main-title">Calculate Your Earning!</h3>
          </div>

          <div className="calculator-body">
            {/* Input Row 1: Data per hour */}
            <div className="calc-input-group">
              <div className="calc-label-row">
                <label htmlFor="dataPerHour" className="calc-label">
                  How much data you can type in 1 hour:
                </label>
                <div className="calc-number-box">
                  <input
                    type="number"
                    id="dataPerHourNum"
                    min="1"
                    max="300"
                    value={dataPerHour}
                    onChange={(e) => setDataPerHour(Math.max(1, Number(e.target.value)))}
                    className="calc-input-number"
                  />
                </div>
              </div>
              <div className="calc-slider-wrapper">
                <input
                  type="range"
                  id="dataPerHour"
                  min="10"
                  max="150"
                  step="5"
                  value={dataPerHour}
                  onChange={(e) => setDataPerHour(Number(e.target.value))}
                  className="calc-range-slider"
                />
              </div>
            </div>

            {/* Input Row 2: Hours daily */}
            <div className="calc-input-group">
              <div className="calc-label-row">
                <label htmlFor="hoursDaily" className="calc-label">
                  How many hour you can work daily:
                </label>
                <div className="calc-number-box">
                  <input
                    type="number"
                    id="hoursDailyNum"
                    min="1"
                    max="24"
                    value={hoursDaily}
                    onChange={(e) => setHoursDaily(Math.max(1, Math.min(24, Number(e.target.value))))}
                    className="calc-input-number"
                  />
                </div>
              </div>
              <div className="calc-slider-wrapper">
                <input
                  type="range"
                  id="hoursDaily"
                  min="1"
                  max="16"
                  step="1"
                  value={hoursDaily}
                  onChange={(e) => setHoursDaily(Number(e.target.value))}
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
                <span>Calculate</span>
              </button>
            </div>

            {/* Income Display Table matching the exact screenshot */}
            {showResults && (
              <div className={`income-panel ${isCalculatedAnim ? 'pulse-anim' : ''}`}>
                <h4 className="income-heading">Your Income</h4>

                <div className="income-table">
                  {/* Row 1 Header */}
                  <div className="table-row table-header-row">
                    <div className="table-cell">Daily Earning</div>
                    <div className="table-cell">Weekly Earning</div>
                  </div>
                  {/* Row 1 Values */}
                  <div className="table-row table-value-row">
                    <div className="table-cell table-value">₹{dailyEarnings}</div>
                    <div className="table-cell table-value">₹{weeklyEarnings}</div>
                  </div>

                  {/* Row 2 Header */}
                  <div className="table-row table-header-row">
                    <div className="table-cell">Monthly Earning</div>
                    <div className="table-cell">Yearly Earning</div>
                  </div>
                  {/* Row 2 Values */}
                  <div className="table-row table-value-row">
                    <div className="table-cell table-value">₹{monthlyEarnings}</div>
                    <div className="table-cell table-value">₹{yearlyEarnings}</div>
                  </div>
                </div>

                {/* WhatsApp Next Step */}
                <div className="calc-cta-box">
                  <div className="calc-cta-info">
                    <p className="cta-headline">Ready to claim your typing &amp; data entry work?</p>
                    <p className="cta-sub">Confirm your daily schedule directly over WhatsApp.</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-neon calc-whatsapp-btn"
                    onClick={handleWhatsAppInquiry}
                  >
                    <span>Confirm on WhatsApp</span>
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
