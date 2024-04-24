import React from 'react';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import Contact from './Contact';
  
  const Home = () => {
    return(
     <div className="home">  
      <Hero />
      <button ahref='login'>login</button>
      <Features />
      <Footer />
    </div>
      );
  };

  export default Home;
