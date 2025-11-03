import React from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi'; // Import icon
import './Header.css';

const Header = () => {
  const navLinks = ['HOME', 'PAGES', 'BLOG', 'EVENTS', 'SHOP', 'CONTACTS'];

  return (
    <header className="header-container">
      <img src="https://res.cloudinary.com/dozs7ggs4/image/upload/v1762176364/logo-2_o1wxfz.png" className="logo-img"/>
      <nav className="nav-menu">
        {navLinks.map((link) => (
          <a href="#" key={link}>{link}</a>
        ))}
      </nav>
      <div className="header-actions">
        {/* Sử dụng component icon */}
        <FiSearch className="icon" />
        <FiShoppingCart className="icon" />
        <button className="buy-tickets-btn">BUY TICKETS</button>
      </div>
    </header>
  );
};

export default Header;