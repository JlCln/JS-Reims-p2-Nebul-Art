import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavBar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header>
      <button
        type="button"
        onClick={toggleNavBar}
        className="nav-toggle-button"
      >
        &nbsp;Menu&nbsp;
      </button>

      <nav className={`nav-bar ${isExpanded ? "expanded" : ""}`}>
        <Link to="/browse" className="nav-button">
          Browse
        </Link>
        <Link to="/search" className="nav-button">
          Search
        </Link>
        <Link to="/account" className="nav-button">
          Account
        </Link>
        <Link to="/about" className="nav-button">
          About
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;
