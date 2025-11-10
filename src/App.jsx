// App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar"; // Import Navbar
import Footer from "./components/Footer";
import DesignProcess from "./pages/DesignProcess";
import "./App.css"; // Custom styles
import backgroundDesign from './assets/images/backgroundDesign.png';

function App() {
  useEffect(() => {
    document.documentElement.style.setProperty('--background-design', `url(${backgroundDesign})`);
  }, []);

  return (
    <Router basename="/jessemakesgames">
    {/* <Router> */}
      <div className="app-container">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/designprocess" element={<DesignProcess />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;