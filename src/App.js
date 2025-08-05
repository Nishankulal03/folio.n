import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/skills';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExperienceSection from './components/Experience';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <Skills />
      <Qualification />
      <Projects />
      <ExperienceSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
