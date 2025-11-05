import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import './Speakers.css';


const speakerData = [
  { name: 'Matey Black', title: 'Creative Designer', imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176364/sc-1-310x360_jjh5w5.jpg' },
  { name: 'Christian Grant', title: 'Design Director', imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176363/sc-3-310x360_u6pocj.jpg' },
  { name: 'Michelle Larson', title: 'Design Director', imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176363/sc-2-310x360_voyxwd.jpg' },
  { name: 'Mark Petterson', title: 'Senior Product Designer', imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176363/sc-5-310x360_ikpah6.jpg' },
  { name: 'Marry Conor', title: 'Design Guild Lead', imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176363/sc-6-310x360_ohkrzq.jpg' },
  { name: 'Harry Olson', title: 'Lead Product Designer', imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176362/event-7_1-740x600_oznznd.jpg' },
];

const Speakers = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  // 1. TẠO STATE MỚI ĐỂ LƯU VỊ TRÍ ẢNH
  const [imagePosition, setImagePosition] = useState({ top: 0, opacity: 0 });

  // Chiều cao của ảnh preview, dùng để tính toán căn giữa
  const imageHeight = 360; 

  // 2. TẠO HÀM XỬ LÝ SỰ KIỆN HOVER
  const handleMouseEnter = (e, index) => {
    setHoveredIndex(index);
    // Lấy thông tin vị trí của dòng đang được hover
    const rect = e.currentTarget.getBoundingClientRect();
    // Tính toán vị trí 'top' để căn giữa ảnh với dòng
    const newTop = rect.top + (rect.height / 2) - (imageHeight / 2);
    setImagePosition({ top: newTop, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    // Giữ lại 'top' cũ để hiệu ứng fade-out mượt mà, chỉ đổi opacity
    setImagePosition(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <section className="speakers-section">
      <div className="speakers-overlay"></div>

      <div 
        className="speaker-image-preview"
        style={{
          top: `${imagePosition.top}px`, // Gán vị trí top động
          opacity: imagePosition.opacity, // Gán độ mờ
          backgroundImage: hoveredIndex !== null ? `url(${speakerData[hoveredIndex].imageUrl})` : 'none',
        }}
      ></div>

      <div className="marquee-container">
        <div className="marquee-content">
          {[...Array(8)].map((_, i) => (
            <React.Fragment key={i}>
              <span>SPEAKERS</span>
              <img src="https://res.cloudinary.com/dozs7ggs4/image/upload/v1762180782/cropped-favicon-32x32_ig883m.png" alt="decorative icon" className="marquee-icon" />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="speaker-list-container">
        {speakerData.map((speaker, index) => (
          <div 
            className={`speaker-item ${hoveredIndex === index ? 'active' : ''}`}
            key={index}
            onMouseEnter={(e) => handleMouseEnter(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="speaker-info">
              <h3>{speaker.name}</h3>
              <span className="speaker-title">/ {speaker.title}</span>
            </div>
            <a href="#" className="read-more-speaker">
              <FiArrowUpRight />
              <span>read more</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speakers;