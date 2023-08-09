// Menu.jsx

import React from "react";
import { TiHome } from "react-icons/ti"; // Home icon
import { GiMusicalScore } from "react-icons/gi"; // Genres icon
import { IoIosAlbums } from "react-icons/io"; // Albums icon
import { BsPersonFill } from "react-icons/bs"; // Artists icon

import "./Menu.css"; // Stylesheet

export default function Menu() {
  return (
    <div className="menu">
      <h3 className="menu-lists">Menu</h3>
      <ul>
        <li>
          <TiHome className="icons-style" />{" "}
          <span className="menu-lists">Explore</span>
        </li>
        <li>
          <GiMusicalScore className="icons-style" />{" "}
          <span className="menu-lists">Genres</span>
        </li>
        <li>
          <IoIosAlbums className="icons-style" />{" "}
          <span className="menu-lists">Albums</span>
        </li>
        <li>
          <BsPersonFill className="icons-style" />{" "}
          <span className="menu-lists">Artists</span>
        </li>
      </ul>
    </div>
  );
}
