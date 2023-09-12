// TopArtists.jsx

import React from "react";
import CardArtist from "./ArtistsWindow";

import "./TopArtists.css";

const TopArtists = () => {
  return (
    <div className="topArtists">
      <div className="topArtists-details">
        <CardArtist />
      </div>
    </div>
  );
};

export default TopArtists;
