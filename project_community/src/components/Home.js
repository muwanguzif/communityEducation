import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
  
  const Home = () => {
    return(
     <div className="home">  
      <Hero />
      <Features />
      <Footer />
    </div>
      );
  };

  export default Home;
