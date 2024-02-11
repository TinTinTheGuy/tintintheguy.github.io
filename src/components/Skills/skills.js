// Skill.jsx
import React from "react";

const frontEndSkills = [
  "React",
  "Tailwind",
  "Bootstrap",
  "CSS",
  "HTML",
  "Next.js",
];

const backEndSkills = [
  "TypeScript",
  "C/C++",
  "Python",
  "Node.js",
  "Express",
  "MongoDB"
];

function Skill() {
  return (
    <section style={sectionStyle}>
      <div className="Skills">
        <h1 style={headingStyle}>My Skills</h1>
      </div>
      <div className="FrontEnd">
        <div>
          <h2 style={subHeadingStyle}>Frontend</h2>
        </div>
        <ul style={skillListStyle}>
          {frontEndSkills.map((skill, index) => (
            <li
              style={skillItemStyle}
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className="Skills">
        <h2 style={subHeadingStyle}>Backend</h2>
        <ul style={skillListStyle}>
          {backEndSkills.map((skill, index) => (
            <li
              style={skillItemStyle}
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const sectionStyle = {
  padding: '50px 20px',
  backgroundColor: 'transparent',
  color: 'white',
  marginTop: '750px', // Adjust the top margin as needed
  // marginRight: '750px',
  position: 'relative',
  bomttom:'0',
};

const headingStyle = {
  fontSize: '30px',
  marginBottom: '8px',
  fontWeight: 'extrabold',
  textDecoration: 'underline',
  textUnderlineOffset: '8px',
  textAlign: 'center',
};

const subHeadingStyle = {
  fontSize: '2xl',
  marginBottom: '3px',
  textAlign : 'center',
  fontWeight: 'extrabold',
};

const skillListStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '10px',
  textAlign: 'center',
};

const skillItemStyle = {
  backgroundColor: 'orange',
  border: '1px solid #fff',
  borderRadius: '12px',
  padding: '8px 16px',
  cursor: 'pointer',
  transition: 'all 0.5s ease-in-out',
};

export default Skill;
