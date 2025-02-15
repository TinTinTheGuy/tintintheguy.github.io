import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tan Ton </span>
            
            <br />
            I am a new grad from Oregon State University.
            <br />
            I have completed Bachelor Degree in Computer Science
            <br />
            I also have a Cyber Security Certificate from OSU
            <br/>
            <br />
            Some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Safeguarding the invisible threads that connect us"{" "}
          </p>
          <footer className="blockquote-footer">Tan Ton</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
