// AboutMe.jsx
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <div className="about-content" style={contentStyle}>
          <div className="profile-picture" style={imageContainerStyle}>
            {/* Add your profile picture */}
            <img src="/Pictures/TuyetTran.JPG" alt="Profile Picture" style={imageStyle} />
          </div>
          <div className="bio" style={bioStyle}>
            <h2 style={headingStyle}>About Me</h2>
            <p>
              I'm Tan. An Oregon State University new grad looking for an internship.
            </p>
            <p>
              I graduated with a degree in Computer Science and have no experience in the industry. I'm looking for a great future and career path to build up myself.
            </p>
            <p>
              In my free time, I enjoy camping and hiking. I'm always eager to learn new technologies and contribute to innovative projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  backgroundColor: 'transparent', // Background color for the section
  color: '#fff', // Text color
  padding: '10px', // Padding for top and bottom
  textAlign: 'center', // Center text
  position: 'absolute', // Set position to relative
  top: '400px', // Adjust the top position as needed
  zIndex: 10,
};

const containerStyle = {
  display: 'flex', // Use flexbox for layout
  justifyContent: 'center', // Center the content horizontally
};

const headingStyle = {
  fontSize: '2em', // Adjust the font size
  marginBottom: '20px', // Add some space below the heading
};

const contentStyle = {
  display: 'flex', // Use flexbox for layout
  alignItems: 'center', // Center items vertically
  textAlign: 'left', // Align text to the left within the content
};

const imageContainerStyle = {
  marginLeft: '100px', // Set the left margin to 'auto' to push the image to the right
  marginRight: '-200px', // Add a right margin for additional spacing
  
  padding: '0px',
};

const imageStyle = {
  maxWidth: '50%', // Ensure the image does not exceed its container
  borderRadius: '10%', // Create a circular shape for the image
};

const bioStyle = {
  fontSize: '20px',
  marginRight: '100px',
};

export default AboutMe;
