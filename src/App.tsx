import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Sathwik Pedapati | Full Stack Developer</title>
          <meta 
            name="description" 
            content="Full Stack Developer specializing in React.js and Node.js. Building fast, scalable, and user-friendly web applications with real-time features and clean UI." 
          />
          <meta name="keywords" content="Full Stack Developer, React Developer, Node.js Developer, Web Developer, Portfolio, Sathwik Pedapati" />
          <meta name="author" content="Sathwik Pedapati" />
          <meta property="og:title" content="Sathwik Pedapati | Full Stack Developer" />
          <meta 
            property="og:description" 
            content="Full Stack Developer specializing in React.js and Node.js. Building fast, scalable, and user-friendly web applications." 
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://sathwikpedapati.com" />
          <link rel="canonical" href="https://sathwikpedapati.com" />
        </Helmet>

        <Navigation />
        
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Achievements />
          <Certifications />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
