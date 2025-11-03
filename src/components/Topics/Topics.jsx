import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './Topics.css';

// URLs bạn cung cấp
const imageUrls = {
  speaker: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762175972/home4-4_sdfxt9.jpg',
  topic: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762175971/home4-5_ggi2nt.jpg',
};

const Topics = () => {
  return (
    <section className="topics-section">
      {/* Cột bên trái: Diễn giả */}
      <div 
        className="topic-column" 
        style={{ backgroundImage: `url(${imageUrls.speaker})` }}
      >
        <div className="info-box blue-box">
          <p className="info-subtitle">SPECIAL SPEAKER & FOUNDER</p>
          <h3 className="info-title">Arnold Johnson</h3>
          <a href="#" className="info-arrow"><FiArrowUpRight /></a>
        </div>
      </div>

      {/* Cột bên phải: Chủ đề */}
      <div 
        className="topic-column" 
        style={{ backgroundImage: `url(${imageUrls.topic})` }}
      >
        <div className="info-box white-box">
          <p className="info-subtitle">MAIN TOPIC OF CONFERENCE</p>
          <h3 className="info-title">The Future of 3D Design</h3>
          <a href="#" className="info-arrow"><FiArrowUpRight /></a>
        </div>
      </div>
    </section>
  );
};

export default Topics;