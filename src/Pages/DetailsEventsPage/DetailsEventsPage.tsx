import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronRight, FiCalendar, FiMapPin, FiShoppingCart, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import { EventType, CartItemType } from '../../types/eventTypes';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import ConfirmDialog from '../../components/ConfirmDialog/ConfirmDialog';
import EventInfo from '../../components/EventInfo/EventInfo';
import EventSpeakers from '../../components/EventSpeakers/EventSpeakers';
import EventLocation from '../../components/EventLocation/EventLocation';
import './DetailsEventsPage.css';

// Import event data
const eventsData = [
  {
    title: 'AFTERPARTY',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    address: 'Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom',
    description: 'In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the...',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305367/event-8_1_kzu0q8.jpg',
    tags: ['afterparty'],
    price: 50,
    speakers: [
      {
        name: 'Marry Conor',
        role: 'UI/UX Designer',
        image: '/images/team-1.jpg'
      },
      {
        name: 'Harry Olson',
        role: 'Product Manager',
        image: '/images/team-2.jpg'
      }
    ]
  },
  {
    title: 'THE FUTURE OF UI/UX',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    address: 'Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom',
    description: 'Artificial intelligence is rapidly evolving and revolutionizing the way we approach design and development. AI helps designers create more user-friendly interfaces by analyzing user data and behavior patterns to identify areas for improvements.',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305364/event-1_1_ozaium.jpg',
    tags: ['conference'],
    price: 100,
    speakers: [
      {
        name: 'Marry Conor',
        role: 'UI/UX Designer',
        image: '/images/team-1.jpg'
      },
      {
        name: 'Harry Olson',
        role: 'Product Manager',
        image: '/images/team-2.jpg'
      }
    ]
  },
  {
    title: 'AI SOLUTIONS',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    address: 'Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom',
    description: 'In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the development process and free up developers to focus on more complex problems.',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305365/event-6_1_rpfwkj.jpg',
    tags: ['conference', 'afterparty'],
    price: 75,
    speakers: [
      {
        name: 'Marry Conor',
        role: 'UI/UX Designer',
        image: '/images/team-1.jpg'
      },
      {
        name: 'Harry Olson',
        role: 'Product Manager',
        image: '/images/team-2.jpg'
      }
    ]
  },
  {
    title: 'MOBILE DESIGN',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    address: 'Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom',
    description: 'In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the development process.',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305365/event-7_1_kyau0p.jpg',
    tags: ['conference', 'presentation'],
    price: 60,
    speakers: [
      {
        name: 'Marry Conor',
        role: 'UI/UX Designer',
        image: '/images/team-1.jpg'
      },
      {
        name: 'Harry Olson',
        role: 'Product Manager',
        image: '/images/team-2.jpg'
      }
    ]
  },
  {
    title: 'THE POTENTIAL OF AI',
    date: 'November 20, 2024 | All Day',
    location: 'Four Seasons Hotel',
    address: 'Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom',
    description: 'In addition to design, AI can also revolutionize the development process by providing developers with tools that automate many of the repetitive tasks involved in coding. This can help to speed up the development process.',
    imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305364/event-3_1_cyr9a7.jpg',
    tags: ['conference', 'presentation'],
    price: 80,
    speakers: [
      {
        name: 'Marry Conor',
        role: 'UI/UX Designer',
        image: '/images/team-1.jpg'
      },
      {
        name: 'Harry Olson',
        role: 'Product Manager',
        image: '/images/team-2.jpg'
      }
    ]
  }
];

const DetailsEventsPage = () => {
  const { id } = useParams();
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<CartItemType | null>(null);

  // Find the event based on the URL parameter
  const eventDetails = eventsData.find(
    event => event.title.toLowerCase().replace(/\s+/g, '-') === id
  ) || eventsData[0];

  const handleBooking = () => {
    const existingItem = cartItems.find(item => item.title === eventDetails.title);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.title === eventDetails.title 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...eventDetails, quantity: 1 }]);
    }
    setShowCart(true);
  };

  const handleQuantityChange = (title: string, change: number) => {
    setCartItems(cartItems.map(item => {
      if (item.title === title) {
        const newQuantity = Math.max(0, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleRemoveClick = (item: CartItemType) => {
    setItemToRemove(item);
    setShowConfirmDialog(true);
  };

  const handleConfirmRemove = () => {
    if (itemToRemove) {
      setCartItems(cartItems.filter(item => item.title !== itemToRemove.title));
    }
    setShowConfirmDialog(false);
    setItemToRemove(null);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Related events data
  const relatedEvents = [
    {
      title: 'AI SOLUTIONS',
      slug: 'ai-solutions',
      imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305365/event-6_1_rpfwkj.jpg',
      price: 0,
      tags: ['conference', 'afterparty']
    },
    {
      title: 'MOBILE DESIGN',
      slug: 'mobile-design',
      imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305365/event-7_1_kyau0p.jpg',
      price: 0,
      tags: ['conference', 'presentation']
    },
    {
      title: 'THE POTENTIAL OF AI',
      slug: 'the-potential-of-ai',
      imageUrl: 'https://res.cloudinary.com/dozs7ggs4/image/upload/v1762305364/event-3_1_cyr9a7.jpg',
      price: 0,
      tags: ['conference', 'presentation']
    }
  ];

  return (
    <div className="event-details-page">
      <section className="event-details-hero" style={{ backgroundImage: `url(${eventDetails.imageUrl})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>{eventDetails.title}</h1>
          <div className="breadcrumb">
            <Link to="/">home</Link> <FiChevronRight /> <Link to="/events">events</Link> <FiChevronRight /> <span>details</span>
          </div>
        </div>
      </section>

      <div className="event-details-content">
        <div className="main-content">
          {/* Featured Image - Sử dụng ảnh khác nếu có, hoặc ẩn nếu dùng cùng ảnh hero */}
          <div className="featured-image-section">
            <div className="event-tags-top">
              {eventDetails.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
            <img src={eventDetails.imageUrl} alt={eventDetails.title} className="featured-image" />
          </div>

          {/* Event Info Component */}
          <EventInfo event={eventDetails} />

          {/* Map Location Component */}
          <EventLocation
            title="London Eye"
            address="Riverside Building, County Hall, Westminster Bridge Rd, London SE1 7PB, United Kingdom"
            rating={4.5}
            reviews={1943}
          />

          {/* Speakers Component */}
          <EventSpeakers speakers={eventDetails.speakers} />

          {/* Bookings Section */}
          <div className="bookings-section">
            <h2>BOOKINGS</h2>
            <div className="bookings-content">
              <p>Booking this event hasn't been easier. Simply click the "booking now" button below.</p>
              
              <div className="booking-tags">
                <span className="booking-tag">conference</span>
                <span className="booking-tag">event</span>
                <span className="booking-tag">meeting</span>
              </div>

              <div className="share-buttons">
                <button className="share-btn"><FiCalendar /></button>
                <button className="share-btn"><FiMapPin /></button>
                <button className="share-btn"><FiShoppingCart /></button>
              </div>
            </div>
          </div>

          {/* Related Events */}
          <div className="related-events">
            <h2>RELATED EVENTS</h2>
            <div className="related-grid">
              {relatedEvents.map((event, index) => (
                <div key={index} className="related-card">
                  <div className="related-image">
                    <div className="related-tags">
                      {event.tags.map((tag, tagIndex) => (
                        <span key={tagIndex}>{tag}</span>
                      ))}
                    </div>
                    <img src={event.imageUrl} alt={event.title} />
                  </div>
                  <div className="related-body">
                    <h3 className="related-title">{event.title}</h3>
                    <div className="related-price">${event.price.toFixed(2)}</div>
                    <div className="related-meta">
                      <span><FiCalendar size={14} /> November 20, 2024 | All Day</span>
                    </div>
                    <div className="related-meta">
                      <span><FiMapPin size={14} /> Four Seasons Hotel</span>
                    </div>
                    <Link to={`/events/${event.slug}`} className="related-btn">
                      VIEW INFO
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="comments-section">
            <h2>COMMENTS (02)</h2>
            <div className="comments-content">
              <div className="comment-item">
                <img src="/images/team-1.jpg" alt="Mark Petesson" className="comment-avatar" />
                <div className="comment-body">
                  <div className="comment-header">
                    <h4>By Mark Petesson</h4>
                    <span className="comment-date">March 8, 2023</span>
                  </div>
                  <p>This is so useful post for finding tickets when they exceed the minimal, what about think exceeding removable look and feel that I can send a real and comment that statement it.</p>
                </div>
              </div>

              <div className="comment-item reply">
                <img src="/images/team-2.jpg" alt="By James Rosting" className="comment-avatar" />
                <div className="comment-body">
                  <div className="comment-header">
                    <h4>By James Rosting</h4>
                    <span className="comment-date">March 8, 2023</span>
                  </div>
                  <p>There could we a maximal plugin or the blog UI any, by the client could a bit calculating corrections.</p>
                  <a href="#" className="reply-link">Reply</a>
                </div>
              </div>
            </div>

            {/* Leave Reply Form */}
            <div className="leave-reply">
              <h3>LEAVE A REPLY</h3>
              <p>Your email address will not be published. Required fields are marked *</p>
              
              <form className="reply-form">
                <div className="form-row">
                  <input type="text" placeholder="Your Name *" required />
                  <input type="email" placeholder="Your Email *" required />
                </div>
                <input type="url" placeholder="Website" />
                <textarea placeholder="Your Comment *" rows={6} required></textarea>
                <div className="form-checkbox">
                  <input type="checkbox" id="save-info" />
                  <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
                </div>
                <button type="submit" className="submit-comment">POST COMMENT</button>
              </form>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="sidebar">
          <div className="booking-section">
            <span className="price">${eventDetails.price}</span>
            <button className="booking-button" onClick={handleBooking}>
              booking now
            </button>
          </div>

          <div className="event-info-widget">
            <h3>EVENT INFO</h3>
            <div className="info-item">
              <FiCalendar />
              <div>
                <strong>Date & Time</strong>
                <p>{eventDetails.date}</p>
              </div>
            </div>
            <div className="info-item">
              <FiMapPin />
              <div>
                <strong>Location</strong>
                <p>{eventDetails.location}</p>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {showCart && (
        <ShoppingCart
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onQuantityChange={handleQuantityChange}
          onRemoveClick={handleRemoveClick}
          calculateTotal={calculateTotal}
        />
      )}

      {showConfirmDialog && itemToRemove && (
        <ConfirmDialog
          title="Remove Item"
          message={`Are you sure you want to remove ${itemToRemove.title} from your cart?`}
          onCancel={() => setShowConfirmDialog(false)}
          onConfirm={handleConfirmRemove}
        />
      )}
    </div>
  );
};

export default DetailsEventsPage;
