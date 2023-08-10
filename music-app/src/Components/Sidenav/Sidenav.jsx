// Sidenav.jsx

import React, { useState } from "react";
import Profile from "./Profile"; // Profile component
import Menu from "./Menu"; // Menu component
import Playlist from "./Playlist"; // Playlist component
import { FaBars, FaTimes } from "react-icons/fa"; // Burger & close icon

import "./Sidenav.css"; // Stylesheet

export default function Sidenav() {
  const [showSidenav, setShowSidenav] = useState(false);

  // Burger Icon
  const toggleSidenav = () => {
    setShowSidenav(!showSidenav);
  };

  // Close Icon
  const closeSidenav = () => {
    setShowSidenav(false);
  };

  return (
    <nav>
      {/* Burger Icon  */}
      <div className="burger-icon" onClick={toggleSidenav}>
        {showSidenav ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`sidenav ${showSidenav ? "show" : ""}`}>
        {/* Close Button */}
        <div className="close-button" onClick={closeSidenav}>
          <FaTimes />
        </div>

        {/* Profile, Menu, and Playlist components */}
        <aside>
          <Profile />
          <Menu />
          {/*close the sidenav when clicking on the profile*/}
          <Playlist closeSidenav={closeSidenav} />
        </aside>
      </div>
    </nav>
  );
}
