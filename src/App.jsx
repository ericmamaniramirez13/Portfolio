import React from 'react';
import Navbar from './components/NavBar';
import GeminiChat from './components/GeminiChat';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <GeminiChat />
    </div>
  );
}

export default App;