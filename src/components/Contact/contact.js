import React from 'react';

const Contact = () => {
  return (
    <section style={contactStyle}>
      <div className="contact-content" style={CcontentStyle}>
        <h2 style={CheadingStyle}>Contact Me</h2>
        <p style={paragraphStyle}>
          Feel free to reach out to me for any inquiries or collaborations.
        </p>
        <div style={contactDetailsStyle}>
          <p>Email: tont@oregonstate.edu</p>
          <p>Phone: (669)-203-7383</p>
        </div>
      </div>
    </section>
  );
};

const contactStyle = {
  backgroundColor: 'transparent',
  padding: '50px 0',
  textAlign: 'center',
  position: 'absolute',
  zIndex: 10,
  width:'300px',
  height:'300px',
  color: '#fff',
  left: '50%',
  marginLeft: '-150px',
  
};

const CcontentStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const CheadingStyle = {
  fontSize: '2em',
  marginBottom: '30px',
};

const paragraphStyle = {
  fontSize: '1.2em',
  marginBottom: '30px',
};

const contactDetailsStyle = {
  fontSize: '1.1em',
};

export default Contact;
