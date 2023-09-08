// CardArtist.jsx

import React from "react";
import Artist from "./Images/Artist.jpeg"; // Artist image

import "./CardArtists.css"; // Stylesheet

// Card for each artist
export default function CardArtist({ index }) {
  return (
    <div className="artists-card">
      <img src={Artist} alt="artists-img" className="artists-img" />
      <h4 className="artists-name">Artist Name</h4>
    </div>
  );
}
