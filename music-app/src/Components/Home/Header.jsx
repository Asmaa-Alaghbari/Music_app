// Header.jsx

import React from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1 className="Title">Home</h1>
      <div className="search-container">
        <PiMagnifyingGlass className="search-icon" />
        <input
          className="searchbar-input"
          type="text"
          placeholder="Type to search..."
        />
      </div>
    </div>
  );
};

export default Header;
