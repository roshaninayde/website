// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Customer Support</h4>
        <ul>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Returns</li>
          <li>Track Order</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Press</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Connect with Us</h4>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Customer service</a>
          <a href="#" target="_blank" rel="noopener noreferrer">online shoping</a>
          <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
      <div className="footer-section">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
