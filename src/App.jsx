import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
