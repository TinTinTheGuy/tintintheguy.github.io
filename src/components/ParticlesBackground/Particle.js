// ParticleBackground.js
import React from 'react';
import Particles from '@tsparticles/react';
import ParticleConfig from './config/ParticleConfig';

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={ParticleConfig}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    />
  );
};

export default ParticleBackground;
