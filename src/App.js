import React from 'react';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Header from './Components/Header/Header';
// import Contact from './Components/Contact/Contact';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Portfolio/>
    </div>
  );
}

export default App;
