import React from 'react';
import NavigationBar from './NavigationBar';

const Hero = () => {
  return(
    <div className="hero-section">
      <NavigationBar />
      <div className="hero-content">
        <h1>CommunityInfoHub</h1>
        <p>Empowering Communities with knowledge to thrive.</p>
      </div>
    </div>
  );
};

export default Hero;
