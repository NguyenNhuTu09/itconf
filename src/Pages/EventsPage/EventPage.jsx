import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiCalendar, FiList, FiGrid, FiChevronRight, FiChevronLeft, FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import './EventPage.css';

// Dữ liệu cho danh sách sự kiện
const eventsListData = [
  {
    title: 'AFTERPARTY',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    description: 'In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the...',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305367/event-8_1_kzu0q8.jpg',
    tags: ['afterparty'],
  },
  {
    title: 'AFTERPARTY & DINNER',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    description: 'In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the...',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305366/event-9_1_glnaa9.jpg',
    tags: ['afterparty'],
  },
  {
    title: 'AI SOLUTIONS',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    description: 'In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the...',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305365/event-6_1_rpfwkj.jpg',
    tags: ['afterparty', 'conference'],
  },
  {
    title: 'MOBILE DESIGN',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    description: 'In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the...',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305365/event-7_1_kyau0p.jpg',
    tags: ['conference', 'presentation'],
  },
  {
    title: 'THE FUTURE OF UI/UX',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    description: 'In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the...',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305364/event-1_1_ozaium.jpg',
    tags: ['conference'],
  },
  {
    title: 'THE POTENTIAL OF AI',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    description: 'In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the...',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305364/event-3_1_cyr9a7.jpg',
    tags: ['conference', 'presentation'],
  },
];

const EventsPage = () => {
  return (
    <div className="events-page">
        <section 
            className="event-hero-section"
            style={{ backgroundImage: 'url(https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305365/pt-events_psqr6i.jpg)' }}
        >
        <div className="event-hero-overlay"></div>
        <div className="event-hero-content">
          <h1>EVENTS</h1>
          <div className="breadcrumb">
            <span>home</span> <FiChevronRight size={14} /> <span>events</span>
          </div>
        </div>
      </section>

             {/* --- Search Bar Section --- */}
       <section className="search-bar-section">
            <div className="search-bar-container">
                <div className="search-input-group">
                    <FiSearch />
                    <input type="text" placeholder="Search" />
                </div>
                <div className="search-input-group">
                    <FiCalendar />
                    <input type="text" placeholder="Dates" />
                </div>
                <div className="view-toggle-icons">
                    <FiList />
                    <FiGrid />
                </div>
                <button className="search-button">
                    <FiArrowUpRight /> search
                </button>
            </div>
       </section>

      <section className="event-list-section">
        <div className="event-list-container">
          {eventsListData.map((event, index) => (
            <div className="list-event-item" key={index}>
              <div className="list-item-image">
                <img src={event.imageUrl} alt={event.title} />
                <div className="list-item-tags">
                  {event.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <div className="list-item-details">
                <h3>{event.title}</h3>
                <div className="list-item-meta">
                  <div><FiCalendar size={14} /><span>{event.date}</span></div>
                  <div><FiMapPin size={14} /><span>{event.location}</span></div>
                </div>
                <p className="list-item-description">{event.description}</p>
                <Link to={`/events/${event.title.toLowerCase().replace(/[\s/]+/g, '-')}`} className="list-item-more-info">
                  <FiArrowUpRight /> more info
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- Pagination --- */}
        <div className="pagination-container">
          <span className="page-number active">1</span>
          <span className="page-number">2</span>
          <button className="page-arrow"><FiChevronRight /></button>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;