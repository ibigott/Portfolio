import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import NavigationBar from './Components/NavigationBar';
import Home from './Pages/Home';

const About = () => <h2>About</h2>;
const Projects = () => <h2>Projects</h2>;
const Resume = () => <h2>Resume</h2>;
const Contact = () => <h2>Contact</h2>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);