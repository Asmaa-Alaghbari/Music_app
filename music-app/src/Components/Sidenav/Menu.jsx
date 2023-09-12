// Menu.jsx

import React, { useState } from "react";
import { TiHome } from "react-icons/ti"; // Home icon
import { GiMusicalScore } from "react-icons/gi"; // Genres icon
import { IoIosAlbums } from "react-icons/io"; // Albums icon
import { BsPersonFill } from "react-icons/bs"; // Artists icon
import { NavLink } from "react-router-dom"; // Open Playlists Window page
import PlaylistsWindow from "../Playlist/PlaylistsWindow"; // Playlists Window page
import GenresWindow from "../Playlist/GenresWindow"; // Genres Window page
import ArtistsWindow from "../Home/ArtistsWindow"; // Artists Window page

import "./Menu.css"; // Stylesheet

export default function Menu() {
  const [activeLink, setActiveLink] = useState(""); // State to track active link

  // Handle click on link and set active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="menu">
      <h3 className="menu-lists-header">Menu</h3>
      <ul>
        {/* Home page */}
        <li>
          <NavLink
            exact // To make the link active only on exact match
            to="/"
            className={`menu-lists ${activeLink === "explore" ? "active" : ""}`}
            onClick={() => handleLinkClick("explore")}
          >
            <TiHome className="icons-style" />
            Home
          </NavLink>
        </li>

        {/* Show all Genres */}
        <li>
          <NavLink
            to="/genres-window"
            component={GenresWindow}
            className={`menu-lists ${activeLink === "genres" ? "active" : ""}`}
            onClick={() => handleLinkClick("genres")}
          >
            <GiMusicalScore className="icons-style" />
            Genres
          </NavLink>
        </li>

        {/* Show all Albums */}
        <li>
          <NavLink
            to="/playlists-window"
            component={PlaylistsWindow}
            className={`menu-lists ${
              activeLink === "playlists" ? "active" : ""
            }`}
            onClick={() => handleLinkClick("playlists")}
          >
            <IoIosAlbums className="icons-style" />
            Albums
          </NavLink>
        </li>

        {/* Show all Artists */}
        <li>
          <NavLink
            to="/artists-window"
            component={ArtistsWindow}
            className={`menu-lists ${activeLink === "artists" ? "active" : ""}`}
            onClick={() => handleLinkClick("artists")}
          >
            <BsPersonFill className="icons-style" />
            Artists
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
