import React from 'react';
import Navbar from './components/NavBar';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div>
      <ParticlesBackground />
      <Navbar />
      <div className="content">
        <h1>Hi, I'm Eric a aspiring Software Engineer</h1>
        <main className="pt-20 text-white">
          <section id="home" className="h-screen bg-gray-900 flex justify-center items-center">
            <h1 className="text-4xl">Welcome to Eric's Portfolio</h1>
          </section>
          {/* Add more sections here... */}
        </main>
      </div>
    </div>
  );
}

export default App;