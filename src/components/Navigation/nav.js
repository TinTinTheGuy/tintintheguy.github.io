// Navigation.jsx
import React from 'react';

const Navigation = () => {
  return (
    <nav style={navStyle}>
      <div className="container" style={containerStyle}>
        <div className="left-section" style={leftSectionStyle}>
          <h1 style={logoStyle}>Tan Ton</h1>
        </div>
        <div className="right-section" style={rightSectionStyle}>
          {/* Add your navigation links or components for the right section */}
        </div>
      </div>
    </nav>
  );
};

const navStyle = {
  backgroundColor: 'transparent', // Background color for the navigation bar
  color: '#fff', // Text color
  padding: '10px', // Padding inside the navigation bar
  textAlign: 'center', // Center-align the content
  position: 'absolute', // Fixed positioning at the top
  width: '100%', // Full width
  top: 0, // Stick to the top
  zIndex: 2, // Adjust the z-index as needed
};

const containerStyle = {
  display: 'flex', // Use flexbox for layout
  justifyContent: 'space-between', // Space between the two sections
};

const leftSectionStyle = {
  flexGrow: 1, // Allow the left section to grow and take available space
};

const rightSectionStyle = {
  marginLeft: 'auto', // Push the right section to the right
};

const logoStyle = {
  fontSize: '1.5em', // Adjust the font size for the logo
  margin: 0, // Remove margin for the logo
};

export default Navigation;
