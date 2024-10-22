import type React from "react";
import { useState } from "react";
import "./NavBar.css";
// import logo from './path/to/logo.png';

const NavBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavBar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header>
      {/* <img src={logo} alt="Logo" className="nav-logo" /> */}
      <button
        type="button"
        onClick={toggleNavBar}
        className="nav-toggle-button"
      >
        &nbsp;Menu&nbsp;
      </button>

      <nav className={`nav-bar ${isExpanded ? "expanded" : ""}`}>
        <button type="button" className="nav-button">
          Browse
        </button>
        <button type="button" className="nav-button">
          Search
        </button>
        <button type="button" className="nav-button">
          Account
        </button>
        <button type="button" className="nav-button">
          About
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
