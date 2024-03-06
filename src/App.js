import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './/Home';
import AIChatbox from './component/AIChatbox';
import Plants from './component/Plants';
import Buy from './component/Buy';
import About from './component/About';
import './Header.css';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>LeafyLux</h1>
          <nav className="taskbar">
            <Link to="/Home">Home</Link>
            <Link to="/Chatbox">AI Chatbox</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/buy">Store</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Chatbox" element={<AIChatbox />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
<footer className="footer">
<p>© {new Date().getFullYear()} LeafyLux - All rights reserved.</p>
</footer>
export default App;
