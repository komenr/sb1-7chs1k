import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;