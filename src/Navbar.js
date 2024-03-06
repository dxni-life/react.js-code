import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`taskbar ${menuOpen ? 'menu-open' : ''}`}>
      <Link to="/" className="home-button">
        <i className="fas fa-home"></i> Home
      </Link>
      <Link to="/chatbox" className="chatbox-button">
        AI Chatbox
      </Link>
      <Link to="/plants" className="plants-button">
        Plants
      </Link>
      <Link to="/buy" className="buy-button">
        Buy
      </Link>
      <Link to="/About" className="about-button">
        About
      </Link>
      <button className="toggle-button" onClick={toggleMenu}>
        <i className={`fas fa-moon ${menuOpen ? 'open' : ''}`}></i>
      </button>
      <div className={`menu-items ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className="home-button">
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/chatbox" className="chatbox-button">
          AI Chatbox
        </Link>
        <Link to="/plants" className="plants-button">
          Plants
        </Link>
        <Link to="/buy" className="buy-button">
          Buy
        </Link>
        <Link to="/About" className="about-button">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;