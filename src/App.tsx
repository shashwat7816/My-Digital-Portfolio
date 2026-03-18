import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg-primary transition-colors duration-normal text-text-primary">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Training />
          <Certificates />
          <Achievements />
          <Resume />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
