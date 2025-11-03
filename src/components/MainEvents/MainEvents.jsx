import React from 'react';
import { FiCalendar, FiMapPin, FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import './MainEvents.css';

// Dữ liệu chi tiết cho mỗi sự kiện
const mainEventsData = [
  {
    title: 'AFTERPARTY',
    price: '$0.00',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176362/event-5_1-740x600_zks1fq.jpg',
    tags: ['afterparty'],
  },
  {
    title: 'THE FUTURE OF UI/UX',
    price: '$0.00',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176362/event-6_1-740x600_iytnrv.jpg',
    tags: ['conference'],
  },
  {
    title: 'MOBILE DESIGN',
    price: '$0.00',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176363/event-9_1-740x600_ahzx2r.jpg',
    tags: ['conference', 'presentation'],
  },
  {
    title: 'TRENDS OF THE YEAR',
    price: '$0.00',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176362/event-7_1-740x600_oznznd.jpg',
    tags: ['afterparty', 'presentation'],
  },
];

const MainEvents = () => {
  return (
    <section className="main-events-section">
      <div className="main-events-container">
        {/* --- Header của Section --- */}
        <div className="events-header">
          <div className="header-title">
            <h2>OUR MAIN EVENTS</h2>
            <a href="#">explore schedule</a>
          </div>
          <div className="header-nav">
            <button className="nav-arrow"><FiArrowLeft /></button>
            <button className="nav-arrow"><FiArrowRight /></button>
          </div>
        </div>

        {/* --- Grid chứa các thẻ sự kiện --- */}
        <div className="events-grid-container">
          {mainEventsData.map((event, index) => (
            <div className="event-card-item" key={index}>
              <div className="card-image-wrapper">
                <img src={event.imageUrl} alt={event.title} />
                <div className="card-tags">
                  {event.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="card-details">
                <h3>{event.title}</h3>
                <p className="price">{event.price}</p>
                <div className="card-meta">
                  <div><FiCalendar size={14} /><span>{event.date}</span></div>
                  <div><FiMapPin size={14} /><span>{event.location}</span></div>
                </div>
                <a href="#" className="more-info-link">
                  <FiArrowUpRight /> more info
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* --- Nút View All --- */}
        <div className="view-all-container">
          <button className="view-all-btn">
            <FiArrowUpRight /> view all events
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainEvents;