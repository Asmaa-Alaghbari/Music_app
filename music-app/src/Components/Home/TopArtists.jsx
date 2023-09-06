// TopArtists.jsx

import React from "react";
import { RiHeartsFill } from "react-icons/ri";
import { FcMusic } from "react-icons/fc";

import "./TopArtists.css";

const TopArtists = () => {
  return (
    <div className="TopArtists">
      <div className="topArtists-details">
        <h5 className="topArtists-name">Artist Name</h5>
        <p className="topArtists-paragraph">
          <RiHeartsFill className="topArtist-icon" />
          1000 Followers
        </p>
        <p className="topArtists-paragraph">
          <FcMusic className="topArtist-icon" />
          1.2M Plays
        </p>
      </div>
    </div>
  );
};

export default TopArtists;
