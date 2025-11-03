import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi'; // Icon cho nút "read more"
import './Events.css';

// Dữ liệu cho các thẻ, bao gồm tiêu đề và URL hình ảnh
const eventData = [
  {
    title: 'Main Location',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176038/ib-4_hovane.jpg',
  },
  {
    title: 'Conference',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176011/ib-8_hfitbu.jpg',
  },
  {
    title: 'Afterparty',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762175994/ib-6_glxrrd.jpg',
  },
  {
    title: 'Workshops',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762175971/ib-9_a2h57r.jpg',
  },
];

const Events = () => {
  return (
    <section className="events-section">
      <div className="events-grid">
        {eventData.map((event, index) => (
          <div 
            className="event-card" 
            key={index} 
            style={{ backgroundImage: `url(${event.imageUrl})` }}
          >
            <div className="card-overlay"></div>
            <div className="card-content">
              <h3>{event.title}</h3>
              <a href="#" className="read-more-link">
                <FiArrowUpRight />
                <span>read more</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;