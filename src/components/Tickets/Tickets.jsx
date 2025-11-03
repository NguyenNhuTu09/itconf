import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { BsSunFill } from 'react-icons/bs'; // Icon cho các gói vé
import './Tickets.css';

// Dữ liệu cho các gói vé
const ticketData = [
  {
    plan: 'STANDARD',
    price: '$850',
    title: 'Main Conference',
    description: 'Enjoy 2 days of inspiring talks, breakout sessions exploring challenging topics, great food.',
    isFeatured: false,
  },
  {
    plan: 'PREMIUM',
    price: '$950',
    title: 'Conference & Workshop',
    description: 'Get everything a Conference pass offers & a chance to deep-dive with experts at a Workshops.',
    isFeatured: true, // Gói này sẽ có style nổi bật
  },
  {
    plan: 'PREMIUM+TICKET',
    price: '$1250',
    title: 'Superpass Conference +1',
    description: 'Everything from General Admission and you get full, exclusive access for a year.',
    isFeatured: false,
  },
];


const Tickets = () => {
  return (
    <section className="tickets-section">
      <div className="tickets-container">
        {/* --- Header --- */}
        <div className="tickets-header">
          <h2>CHOOSE YOUR TICKET</h2>
          <button className="view-all-tickets-btn">
            <FiArrowUpRight /> view all tickets
          </button>
        </div>

        {/* --- Sub-header --- */}
        <div className="tickets-subheader">
          <span className="subheader-tag">pricing plans</span>
        </div>
        <p className="section-description">
          Attending such an event can expose you to different ways of thinking about economic
          issues and help you broaden your understanding of the field.
        </p>

        {/* --- Grid các gói vé --- */}
        <div className="pricing-grid">
          {ticketData.map((ticket, index) => (
            <div 
              className={`pricing-card ${ticket.isFeatured ? 'featured-card' : ''}`} 
              key={index}
            >
              <div className="plan-header">
                <BsSunFill />
                <span>{ticket.plan}</span>
              </div>
              <p className="price">{ticket.price}</p>
              <h3 className="plan-title">{ticket.title}</h3>
              <p className="plan-description">{ticket.description}</p>
              <a href="#" className="buy-ticket-link">
                <FiArrowUpRight /> buy ticket now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tickets;