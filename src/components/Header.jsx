import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <div className="image-box"></div>
        <div className="title">
          <div className="main-title">SEWA FOR ALL</div>
          <div className="sub-title">VOICE OF YOUNGSTERS</div>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          
        </ul>
        <div className="donate-button">
          <button>Donate</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
