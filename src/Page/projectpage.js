import React from 'react';
import ProjectCard from '../components/Showcase/projectcard';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      githubLink: 'https://github.com/yourusername/project1',
      liveDemoLink: 'https://project1demo.com',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <h2 style={headingStyle}>Projects</h2>
        <div className="projects-list" style={projectsListStyle}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  backgroundColor: 'black', // Background color for the section
  padding: '50px 0', // Padding for top and bottom
};

const containerStyle = {
  textAlign: 'center', // Center the content horizontally
};

const headingStyle = {
  fontSize: '2.5em', // Adjust the font size
  marginBottom: '20px', // Add some space below the heading
  fontWeight: 'bold', // Make the heading bold
  textAlign:'center',
  color: 'white',
};

const projectsListStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
};

export default ProjectsPage;
