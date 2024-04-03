import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const NavigationBar = () => {
  return (
    <nav className="navbar">
     <div className='navbar-brand'>
     <Link to="/"> ComunityInfoHub</Link>
     </div>
      <ul className='navbar-links'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    
    </nav>
  );
};

export default NavigationBar;