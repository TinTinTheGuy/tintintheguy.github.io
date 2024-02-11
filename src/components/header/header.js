// Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="container">
        <h1 style={heading1Style}>UI/UX</h1>
        <h1 style={heading1Style}>Web Development</h1>
      </div>
    </header>
  );
};

const headerStyle = {
  backgroundColor: 'transparent',
  color: '#fff',
  padding: '10px',
  marginTop: '20px',
  textAlign: 'center',
  position: 'absolute',  // Set position to fixed
  top: 0,  // Stick to the top
  width: '100%',  // Take up the full width
  zIndex: 2,  // Adjust the z-index as needed
};

const heading1Style = {
  fontSize: '4em',
  marginBottom: '10px',
};

export default Header;
