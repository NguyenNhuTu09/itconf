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



import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'; 
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'; 
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className={`header-container ${isScrolled ? 'scrolled' : ''}`}>
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
        <FiShoppingCart className="icon" />
        <button className="buy-tickets-btn">BUY TICKETS</button>
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

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