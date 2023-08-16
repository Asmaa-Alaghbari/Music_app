// Sidenav.jsx

import React, { useState, useEffect, useRef } from "react";
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

  // Sidenav ref to handle click outside of sidenav
  const sidenavRef = useRef(null);

  // Handle click outside of sidenav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!sidenavRef.current.contains(event.target) && showSidenav) {
        setShowSidenav(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidenav]);

  return (
    <nav>
      {/* Burger Icon  */}
      <div className="burger-icon" onClick={toggleSidenav}>
        {showSidenav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Show Sidenav on the small devices*/}
      <div className={`sidenav ${showSidenav ? "show" : ""}`} ref={sidenavRef}>
        {/* Close Button */}
        <div className="close-button" onClick={closeSidenav}>
          <FaTimes />
        </div>

        {/* Profile, Menu, and Playlist components */}
        <aside>
          <Profile closeSidenav={closeSidenav} />
          <Menu />
          {/*close the sidenav when clicking on the playlist*/}
          <Playlist closeSidenav={closeSidenav} />
        </aside>
      </div>
    </nav>
  );
}
