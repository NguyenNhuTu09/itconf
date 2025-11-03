import React from 'react';
import './Hero.css';


const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="social-links">
        <span>FACEBOOK</span>
        <span>INSTAGRAM</span>
      </div>

      <div className="hero-content">
        <div className="event-details">
          <p>
            20-21th <br />
            of November
          </p>
          <p>
            Los <br />
            Angeles
          </p>
        </div>
        <h1 className="main-headline">
          MEET GRAND <br />
          DIGITAL <br />
          CONFERENCE
        </h1>
        <div className="speaker-info">
          <img src="https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176364/home4-2_l4ghwf.png" alt="Arnold Johnson" className="speaker-avatar" />
          <div className="speaker-details">
            <p>SPECIAL SPEAKER & FOUNDER</p>
            <h3>Arnold Johnson</h3>
          </div>
        </div>
      </div>

      <div className="contact-info">
        <p className="phone">+1 800 123 456 789</p>
        {/* THÊM EMAIL VÀO ĐÂY */}
        <p className="email">ITCONF@MAIL.COM</p>
      </div>
    </section>
  );
};

export default Hero;