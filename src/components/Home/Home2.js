import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
            <p className="home-about-body">
              My journey into the world of technology led me to discover a passion for <b className="purple">Cybersecurity</b>. 
              I thrive on exploring vulnerabilities, understanding threats, and building secure systems.
              <br />
              <br />I have hands-on experience with tools and technologies like 
              <i>
                <b className="purple"> Python and Bash </b>
              </i>
              which I frequently use to develop scripts and automate security tasks.
              <br />
              <br />
              My areas of interest include 
              <i>
                <b className="purple"> Penetration Testing, Malware Analysis, </b> and 
                safeguarding systems with <b className="purple">Network Security</b>.
              </i>
              <br />
              <br />
              I enjoy applying my skills to analyze and mitigate vulnerabilities, using tools like 
              <b className="purple"> Wireshark, Nmap, Metasploit,</b> and 
              <i>
                <b className="purple"> Burp Suite</b>.
              </i>
              <br />
              <br />
              I am always eager to expand my knowledge and contribute to building a safer digital world.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TinTinTheGuy"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tanthatthienton/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tintintheguy/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
