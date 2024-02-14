// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navigation/nav';
import Header from './components/header/header';
import MainContent from './components/Body/Main';
import AboutMe from './components/About/About';
import Skill from './components/Skills/skills';
import Footer from './components/footer/Footer';
import ParticleBackground from './components/ParticlesBackground/Particle';
import { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';
import Contact from './components/Contact/contact';
import Noti from './components/Notification/Noti';
import Timeline from './components/Timeline/Timeline';
function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    
    <Router>
      <div className="App" style={{ position: 'relative', zIndex: 1 }}>
        {init && <ParticleBackground />}
        <Noti />
        <Navbar />
        <Header />
        <MainContent />
        <AboutMe />
        <Skill />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
