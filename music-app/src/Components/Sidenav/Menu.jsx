// Menu.jsx

import React from "react";
import { TiHome } from "react-icons/ti"; // Home icon
import { GiMusicalScore } from "react-icons/gi"; // Genres icon
import { IoIosAlbums } from "react-icons/io"; // Albums icon
import { BsPersonFill } from "react-icons/bs"; // Artists icon
import { Link } from "react-router-dom"; // Open Playlists Window page
import PlaylistsWindow from "../Playlist/PlaylistsWindow"; // Playlists Window page
import GenresWindow from "../Playlist/GenresWindow"; // Genres Window page

import "./Menu.css"; // Stylesheet

export default function Menu() {
  return (
    <div className="menu">
      <h3 className="menu-lists-header">Menu</h3>
      <ul>
        {/* Home page */}
        <li>
          <TiHome className="icons-style" />{" "}
          {
            <Link to="/" className="menu-lists">
              Explore
            </Link>
          }
        </li>

        {/* Show all Genres */}
        <li>
          <GiMusicalScore className="icons-style" />{" "}
          {
            <Link
              to="/genres-window"
              component={GenresWindow}
              className="menu-lists"
            >
              Genres
            </Link>
          }
        </li>

        {/* Show all Albums */}
        <li>
          <IoIosAlbums className="icons-style" />{" "}
          {
            <Link
              to="/playlists-window"
              component={PlaylistsWindow}
              className="menu-lists"
            >
              Albums
            </Link>
          }
        </li>
        <li>
          <BsPersonFill className="icons-style" />{" "}
          <span className="menu-lists">Artists</span>
        </li>
      </ul>
    </div>
  );
}
