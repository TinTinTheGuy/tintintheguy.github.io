import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import AnimalDating from "../../Assets/Projects/AnimalDating.png";
import forensics from "../../Assets/Projects/forensics.png";
import cloudcomputing from "../../Assets/Projects/cloudcomputing.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my Projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forensics}
              isBlog={false}
              title="Forensics"
              description="A Repo for Practicing my cyber security area."
              ghLink="https://github.com/TinTinTheGuy/Forensics-Practice"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudcomputing}
              isBlog={false}
              title="Cloud Computing"
              description="Github Repo that contain my Cloud Computing Class and Project related"
              ghLink="https://github.com/TinTinTheGuy/Cloud-Computing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AnimalDating}
              isBlog={false}
              title="Animal Dating App"
              description="An Animal Dating Website that help matching adopter with pet that in need"
              ghLink="https://github.com/senior-eng-project/Animal-Dating-App"
              demoLink="https://animaladoption.pages.dev/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Digital Defense"
              description="A Repository to keep my Digital Defense Project and Related Work."
              ghLink="https://github.com/TinTinTheGuy/Digital-Defense"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
