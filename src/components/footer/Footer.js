// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <p style={paragraphStyle}>&copy; 2024 Tan Ton. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: 'transparent', // Set background color to transparent for the particle to be visible
  color: '#fff', // text color
  padding: '10px', // padding inside the footer
  textAlign: 'center', // center-align the content
  position: 'fixed', // fixed positioning at the bottom
  width: '100%', // full width
  bottom: 0, // stick to the bottom
  padding: '10px',
};

const paragraphStyle = {
  fontSize: '14px', // adjust the font size
};

export default Footer;
