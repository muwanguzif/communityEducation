import React from 'react';
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './Routes';

import { app } from './firebaseconfig';

function App() {
  return (
    <Router>
      <div className="App">
        <Home/>
      </div>
    </Router>
  );
}

export default App;
