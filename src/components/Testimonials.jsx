import React, { useState } from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Rahul Mehra',
    city: 'Bengaluru',
    role: 'Full-Time AI Data Contributor',
    initials: 'RM',
    rating: 5,
    task: 'Amazon Catalog LLM Dataset',
    rate: '₹450 / Page',
    monthlyEarned: '₹38,000+ / mo',
    review:
      'I transcribe Amazon product catalogs and LLM training prompts. At ₹450 per page, I easily type 8 to 10 pages daily. Payouts arrive directly via UPI every week without fail. The volume of work keeps increasing—money and more work are always ready!',
    verified: true,
  },
  {
    id: 2,
    name: 'Sneha Patel',
    city: 'Ahmedabad',
    role: 'College Student & Part-Time Typist',
    initials: 'SP',
    rating: 4,
    task: 'Zomato Menu OCR Typing',
    rate: '₹400 / Page',
    monthlyEarned: '₹22,500 / mo',
    review:
      'Started two months ago. Onboarding was super fast: they opened my account in 10 minutes and credited the ₹500 Welcome Bonus instantly. I type Zomato menu OCR datasets in the evenings. Great continuous money for students.',
    verified: true,
  },
  {
    id: 3,
    name: 'Vikas Joshi',
    city: 'Pune',
    role: 'AI Model Dataset Specialist',
    initials: 'VJ',
    rating: 5,
    task: 'Corporate AI Query Annotation',
    rate: '₹500 / Page',
    monthlyEarned: '₹54,000 / mo',
    review:
      'The AI typing assistant on the website portal makes work so much faster. I am completing 12-14 pages a day on corporate AI conversation datasets. They pay ₹500 per page for technical batches. Most reliable platform for serious typists.',
    verified: true,
  },
  {
    id: 4,
    name: 'Anjali Nair',
    city: 'Kochi',
    role: 'Remote Document Typist',
    initials: 'AN',
    rating: 4,
    task: 'Swiggy & Retail OCR Data',
    rate: '₹450 / Page',
    monthlyEarned: '₹31,500 / mo',
    review:
      'Working on Zomato and Swiggy store transcription. The best part is that work never dries up—as soon as you complete a batch, a new corporate dataset is assigned. Getting ₹450 per page consistently with transparent accounting.',
    verified: true,
  },
  {
    id: 5,
    name: 'Mohammed Farhan',
    city: 'Hyderabad',
    role: 'LLM Fine-Tuning Contributor',
    initials: 'MF',
    rating: 5,
    task: 'Multilingual LLM Training',
    rate: '₹500 / Page',
    monthlyEarned: '₹48,000 / mo',
    review:
      'Was skeptical at first about ₹400-₹500 per page, but my first batch payout was ₹4,500 sent directly to Google Pay along with the ₹500 welcome bonus. Now I do this full-time on my laptop. More and more work every week!',
    verified: true,
  },
  {
    id: 6,
    name: 'Pooja Sharma',
    city: 'Jaipur',
    role: 'Work-From-Home Typist',
    initials: 'PS',
    rating: 4,
    task: 'Amazon Catalog & OCR Sheets',
    rate: '₹450 / Page',
    monthlyEarned: '₹26,000 / mo',
    review:
      'Flexible working hours allow me to manage home and work on Amazon catalog datasets. Earning around ₹450 per page for 5 to 6 pages daily. The portal website access is smooth and payouts are always on time.',
    verified: true,
  },
  {
    id: 7,
    name: 'Karan Deshmukh',
    city: 'Nagpur',
    role: 'Data Entry Worker',
    initials: 'KD',
    rating: 3,
    task: 'Corporate OCR Verification',
    rate: '₹400 / Page',
    monthlyEarned: '₹18,000 / mo',
    review:
      'Good payout at ₹400 per page and got the ₹500 welcome bonus upon joining. You need to maintain good accuracy because the AI system checks errors before approving, but once you get the rhythm, the flow of work is continuous.',
    verified: true,
  },
  {
    id: 8,
    name: 'Deepak Verma',
    city: 'Delhi NCR',
    role: 'Senior LLM Annotation Lead',
    initials: 'DV',
    rating: 5,
    task: 'Enterprise LLM Prompt Datasets',
    rate: '₹500 / Page',
    monthlyEarned: '₹62,000 / mo',
    review:
      'We handle corporate benchmark LLM datasets. The ₹500 per page rate is unmatched in the Indian freelancing space. WhatsApp support team responds within minutes whenever you need account or batch updates. Highly recommended!',
    verified: true,
  },
];

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredData = testimonialsData.filter((item) => {
    if (activeFilter === '5star') return item.rating === 5;
    if (activeFilter === '4star') return item.rating === 4;
    if (activeFilter === '3star') return item.rating === 3;
    return true;
  });

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Star size={14} className="star-filled" />
            <span>Worker Reviews &amp; Payment Proofs</span>
          </div>
          <h2 className="section-title">
            Real Reviews From <span className="highlight-neon">Our AI Typists</span>
          </h2>
          <p className="section-subtitle">
            Over 500+ typists earning ₹400 to ₹500 per page preparing datasets for Amazon, Zomato, and corporate AI models.
          </p>

          {/* Rating filter pills */}
          <div className="review-filter-tabs">
            <button
              type="button"
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Reviews (8)
            </button>
            <button
              type="button"
              className={`filter-tab ${activeFilter === '5star' ? 'active' : ''}`}
              onClick={() => setActiveFilter('5star')}
            >
              5 Star Reviews (4)
            </button>
            <button
              type="button"
              className={`filter-tab ${activeFilter === '4star' ? 'active' : ''}`}
              onClick={() => setActiveFilter('4star')}
            >
              4 Star Reviews (3)
            </button>
            <button
              type="button"
              className={`filter-tab ${activeFilter === '3star' ? 'active' : ''}`}
              onClick={() => setActiveFilter('3star')}
            >
              3 Star Reviews (1)
            </button>
          </div>
        </div>

        {/* 8 Testimonials Grid */}
        <div className="testimonials-grid">
          {filteredData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-card-header">
                {/* 5-Star Track with active gold stars & rating number */}
                <div className="stars-row" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="star-icon"
                      fill={i < item.rating ? '#F59E0B' : 'rgba(255, 255, 255, 0.12)'}
                      color={i < item.rating ? '#F59E0B' : 'rgba(255, 255, 255, 0.2)'}
                    />
                  ))}
                  <span className="rating-num-badge">{item.rating}.0</span>
                </div>
                <Quote size={22} className="quote-icon" />
              </div>

              {/* Task & Earning Badge */}
              <div className="testimonial-badges-row">
                <span className="task-pill">{item.task}</span>
                <span className="rate-pill">{item.rate}</span>
              </div>

              {/* Review Text */}
              <p className="testimonial-text">&ldquo;{item.review}&rdquo;</p>

              {/* Monthly earnings highlight */}
              <div className="review-earnings-box">
                <span className="earnings-tag">Monthly Payout:</span>
                <span className="earnings-amt">{item.monthlyEarned}</span>
              </div>

              {/* Customer Author Info */}
              <div className="testimonial-author">
                <div className="author-avatar">{item.initials}</div>
                <div className="author-info">
                  <div className="author-name-row">
                    <span className="author-name">{item.name}</span>
                    {item.verified && (
                      <span className="verified-badge" title="Verified Worker & Payout">
                        <CheckCircle size={14} />
                      </span>
                    )}
                  </div>
                  <span className="author-role">{item.role} • {item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
