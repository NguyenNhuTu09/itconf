// import React from 'react';
// import { Link } from 'react-router-dom'; // 1. Import Link
// import { FiSearch, FiShoppingCart } from 'react-icons/fi';
// import './Header.css';

// const Header = () => {
//   const navLinks = ['HOME', 'PAGES', 'BLOG', 'EVENTS', 'SHOP', 'CONTACTS'];

//   return (
//     <header className="header-container">
//       {/* <Link to="/" className="logo">ITconf</Link>  */}
//       <img src="https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176364/logo-2_o1wxfz.png" className="logo-img"/>
//       <nav className="nav-menu">
//         {/* 2. Sửa logic điều hướng */}
//         <Link to="/">HOME</Link>
//           <a href="#">PAGES</a>
//           <a href="#">BLOG</a>
//         <Link to="/events">EVENTS</Link> {/* Link đến trang Events */}
//           <a href="#">SHOP</a>
//           <a href="#">CONTACTS</a>
//       </nav>
//       <div className="header-actions">
//         <FiSearch className="icon" />
//         <FiShoppingCart className="icon" />
//         <button className="buy-tickets-btn">BUY TICKETS</button>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom'; 
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'; 
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Thêm event listener khi component được mount
    window.addEventListener('scroll', handleScroll);

    // Dọn dẹp event listener khi component bị unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  // --- Cart sync: initialize from localStorage and listen for updates ---
  useEffect(() => {
    // initialize
    try {
      const saved = localStorage.getItem('eventCartItems');
      if (saved) setCartItems(JSON.parse(saved));
    } catch (err) {
      console.error('Failed to parse eventCartItems from localStorage', err);
    }

    const onCartUpdated = (e) => {
      // custom event dispatched in DetailsEventsPage
      if (e && e.detail) {
        setCartItems(e.detail);
        return;
      }
      // fallback: read from localStorage
      try {
        const saved = localStorage.getItem('eventCartItems');
        setCartItems(saved ? JSON.parse(saved) : []);
      } catch (err) {
        console.error('Failed to parse eventCartItems from localStorage', err);
      }
    };

    const onStorage = (ev) => {
      // storage event for other tabs/windows
      if (ev.key === 'eventCartItems') {
        try {
          setCartItems(ev.newValue ? JSON.parse(ev.newValue) : []);
        } catch (err) {
          console.error('Failed to parse eventCartItems from storage event', err);
        }
      }
    };

    window.addEventListener('eventCartUpdated', onCartUpdated);
    window.addEventListener('storage', onStorage);

    return () => {
      window.removeEventListener('eventCartUpdated', onCartUpdated);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const headerRef = useRef(null);

  // Keep CSS variable --header-height in sync with the actual header element height
  useEffect(() => {
    const setHeaderHeight = () => {
      if (headerRef.current) {
        const h = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${h}px`);
      }
    };

    // initial
    setHeaderHeight();

    // update when window resizes
    window.addEventListener('resize', setHeaderHeight);

    return () => window.removeEventListener('resize', setHeaderHeight);
  }, []);

  // update when scrolled class toggles (header height may change)
  useEffect(() => {
    if (headerRef.current) {
      const h = headerRef.current.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${h}px`);
    }
  }, [isScrolled]);

  return (
    <header ref={headerRef} className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
      <img src="https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176364/logo-2_o1wxfz.png" className="logo-img"/>
      
      <nav className="nav-menu desktop-nav">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>HOME</NavLink>
        <a href="#">PAGES</a>
        <a href="#">BLOG</a>
        <NavLink to="/events" className={({ isActive }) => isActive ? 'active-link' : ''}>EVENTS</NavLink>
        <a href="#">SHOP</a>
        <a href="#">CONTACTS</a>
      </nav>

      <div className="header-actions">
        <FiSearch className="icon" />
        <div className="cart-icon-wrapper">
          <FiShoppingCart className="icon" onClick={() => setShowCart(true)} />
          {cartItems.length > 0 && (
            <span className="cart-count">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
          )}
        </div>
        <button className="buy-tickets-btn">BUY TICKETS</button>
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      {showCart && (
        <ShoppingCart
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onQuantityChange={(title, change) => {
            setCartItems(items =>
              items.map(item =>
                item.title === title
                  ? { ...item, quantity: Math.max(0, item.quantity + change) }
                  : item
              ).filter(item => item.quantity > 0)
            );
          }}
          onRemoveClick={(item) => {
            setCartItems(items =>
              items.filter(i => i.title !== item.title)
            );
          }}
          calculateTotal={() =>
            cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
          }
        />
      )}

      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>HOME</NavLink>
        <a href="#" onClick={() => setIsMenuOpen(false)}>PAGES</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>BLOG</a>
        <NavLink to="/events" onClick={() => setIsMenuOpen(false)}>EVENTS</NavLink>
        <a href="#" onClick={() => setIsMenuOpen(false)}>SHOP</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>CONTACTS</a>
      </div>
    </header>
  );
};

export default Header;