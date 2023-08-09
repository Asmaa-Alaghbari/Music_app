import React from "react";
import "./Header.css";
import { GoBell } from "react-icons/go";
import { PiMagnifyingGlass } from "react-icons/pi";

const Header = () => {
  return (
    <div>
      <div className="Header">
        <h className="Title">Home</h>
        <span className="bell">
          <GoBell />
        </span>
      </div>
      <span className="search">
        <PiMagnifyingGlass className="glass" />
        <input className="searchbar" type="text" />
      </span>
    </div>
  );
};

export default Header;
