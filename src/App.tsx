import React from 'react';
import './App.css';
import FlipClock from './components/FlipClock';
import Header from './components/Header';

function App() {
  return (
    <div id="app">
      <Header />
      <FlipClock />
    </div>
  );
}

export default App;
