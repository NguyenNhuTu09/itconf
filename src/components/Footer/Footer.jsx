import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import './Footer.css';


const Footer = () => {
  const aboutLinks = [
    'About', 'Speakers', 'Schedule', 'Venue', 'Partners',
    'News', 'Get Tickets', 'Benefits', 'Contact Us', 'Terms of Use'
  ];

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          {/* CỘT 1: THÔNG TIN LIÊN HỆ (ĐÃ CẬP NHẬT) */}
          <div className="footer-column contact-info-main">
            <h3>ITCONF@MAIL.COM</h3>
            <p className="address">
              27 Division St, New York,<br />
              NY 10002, USA
            </p>
            <p className="phone">+1 800 123 456 789</p>
            <div className="social-icons-footer">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>

          {/* Cột 2: About Links */}
          <div className="footer-column about-links">
            <h4>ABOUT CONFERENCE</h4>
            <div className="links-grid">
              {aboutLinks.map(link => <a href="#" key={link}>{link}</a>)}
            </div>
          </div>

          {/* Cột 3: Subscribe */}
          <div className="footer-column subscribe">
            <h4>SUBSCRIBE</h4>
            <div className="subscribe-input">
              <span>Get news & updates</span>
              <FiMail />
            </div>
            <p>Our expertise, as well as our passion for web design, sets us apart from other agencies.</p>
          </div>
        </div>
      </div>

      {/* --- Phần Copyright (Giữ nguyên) --- */}
      <div className="footer-bottom">
        <div className="footer-container bottom-content">
          <div className="copyright-info">
            <div className="footer-logo">
              <img src="https://res.cloudinary.com/dozs7ggs4/image/upload/v1762180782/cropped-favicon-32x32_ig883m.png" alt="ITconf Logo" />
              <span>ITconf</span>
            </div>
            <p>Copyright © 2024 ITconf by WebGeniusLab. All Rights Reserved</p>
          </div>
          <button className="hidden-icons-toggle">Show hidden icons</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;