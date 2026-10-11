import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Dr. Rajesh Sharma',
    role: 'Academic Author & Professor',
    initials: 'RS',
    rating: 5,
    review:
      'I had over 180 pages of handwritten research notes and manuscripts that needed urgent digitizing. Delivered ahead of schedule with immaculate typography and zero spelling errors. Truly dependable work.',
    verified: true,
  },
  {
    id: 2,
    name: 'Priya Kapoor',
    role: 'E-Commerce Store Founder',
    initials: 'PK',
    rating: 5,
    review:
      'Accurately entered and formatted more than 2,500 product SKU listings into our inventory master spreadsheet. Every category, tag, and price was double-checked. Saved my team days of tedious work.',
    verified: true,
  },
  {
    id: 3,
    name: 'Amit Verma',
    role: 'Legal Consultant & Advocate',
    initials: 'AV',
    rating: 5,
    review:
      'Needed rush court petition typing and legal agreement formatting completed within 6 hours. Handled complex legal terminology and strict margin guidelines with total precision and confidentiality.',
    verified: true,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Star size={14} className="star-filled" />
            <span>Client Feedback</span>
          </div>
          <h2 className="section-title">What our customers say</h2>
          <p className="section-subtitle">
            Trusted by students, authors, legal consultants, and business owners for accurate typing and data entry.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="testimonials-grid">
          {testimonialsData.map((item) => (
            <div key={item.id} className="testimonial-card">
              <div className="testimonial-card-header">
                {/* Star Rating */}
                <div className="stars-row" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={17} className="star-icon" fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <Quote size={24} className="quote-icon" />
              </div>

              {/* Review Text */}
              <p className="testimonial-text">&ldquo;{item.review}&rdquo;</p>

              {/* Customer Author Info */}
              <div className="testimonial-author">
                <div className="author-avatar">{item.initials}</div>
                <div className="author-info">
                  <div className="author-name-row">
                    <span className="author-name">{item.name}</span>
                    {item.verified && (
                      <span className="verified-badge" title="Verified Client">
                        <CheckCircle size={14} />
                      </span>
                    )}
                  </div>
                  <span className="author-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
