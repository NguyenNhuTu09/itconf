import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa'; // Icon dấu ngoặc kép
import { FiArrowUp, FiArrowDown } from 'react-icons/fi'; // Icon mũi tên
import './Testimonials.css';

// Dữ liệu cho các testimonials
const testimonialsData = [
  {
    title: 'GREAT EVENT!',
    quote: '"OUR OFFICE IS SOMETHING WE ARE PLEASED WITH. WE CONSIDER IT THE LITTLE MAGNET; IT IS WANTING TO COME HERE AND AFTERWARD DIFFICULT TO LEAVE IT."',
    author: 'Christian Grant',
    role: 'DESIGNER',
  },
  {
    title: 'INCREDIBLE CONF!',
    quote: '"OUR OFFICE IS SOMETHING WE ARE PLEASED WITH. WE CONSIDER IT THE LITTLE MAGNET; IT IS WANTING TO COME HERE AND AFTERWARD DIFFICULT TO LEAVE IT."',
    author: 'Matey Black',
    role: 'CREATIVE DESIGNER',
  },
  // Bạn có thể thêm nhiều testimonials khác vào đây
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-overlay"></div>
      <div className="testimonials-container">
        <div className="testimonials-content">
          <div className="testimonials-header">
            <h2>WHAT PEOPLE SAY</h2>
            <div className="subheader-line">
              <span>testimonials</span>
            </div>
          </div>

          <div className="slider-content">
            {testimonialsData.map((testimonial, index) => (
              <div 
                key={index}
                className={`testimonial-item ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="quote-title">
                  <span className="quote-icon"><FaQuoteLeft /></span>
                  <h3>{testimonial.title}</h3>
                </div>
                <p className="quote-text">{testimonial.quote}</p>
                <div className="author-info">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-nav">
          <button onClick={handlePrev}><FiArrowUp /></button>
          <button onClick={handleNext}><FiArrowDown /></button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

