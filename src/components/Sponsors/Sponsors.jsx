import React from 'react';
import Slider from 'react-slick'; // Import Slider từ thư viện
import './Sponsors.css';

const Sponsors = () => {
  const sponsorLogos = [
    'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176363/partner-5_h3dlud.png',
    'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176364/partner-3_o1bj9s.png',
    'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176364/partner-4_cnp6sn.png',
    'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176364/partner-1_pmelai.png',
    'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176364/partner-2_ohtbfw.png',
    // Thêm logo khác vào đây để kiểm tra hiệu ứng trượt
    'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176363/partner-5_h3dlud.png', 
  ];

  // Cấu hình cho slider
  const settings = {
    dots: false,          // Không hiển thị dấu chấm điều hướng
    infinite: true,       // Vòng lặp vô hạn
    speed: 500,           // Tốc độ trượt (ms)
    slidesToShow: 4,      // Luôn hiển thị 4 ảnh
    slidesToScroll: 1,    // Mỗi lần trượt 1 ảnh
    arrows: false,        // Ẩn mũi tên điều hướng mặc định
    autoplay: true,       // Tự động trượt
    autoplaySpeed: 3000,  // Thời gian chờ giữa các lần trượt
    pauseOnHover: true,   // Dừng khi di chuột vào
  };

  return (
    <section className="sponsors-section">
      <div className="sponsors-slider-container">
        <Slider {...settings}>
          {sponsorLogos.map((logoUrl, index) => (
            // Mỗi item cần được bọc trong một div để styling
            <div key={index}> 
              <div className="sponsor-item">
                <img src={logoUrl} alt={`Sponsor ${index + 1}`} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Sponsors;