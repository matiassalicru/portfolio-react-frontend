import React from 'react';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Header from './Components/Header/Header';
// import Contact from './Components/Contact/Contact';

import './App.css';

function goto(n) {
  const height = window.innerHeight * n;
  window.scrollTo(0, height) // Hace un scroll de la altura del viewport de quien lo está viendo.
}

function App() {
  return (
    <div className="App">
      <Header scroll={goto(1)}/>
      <About scroll={goto(2)}/>
      <Portfolio scroll={goto(3)}/>
    </div>
  );
}

export default App;
