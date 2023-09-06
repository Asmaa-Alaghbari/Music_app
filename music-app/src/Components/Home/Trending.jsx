// Trending.jsx

import React from "react";
import { FaUser } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

import "./Trending.css";

const Trending = ({ index }) => {
  // Calculate the sequential number with leading zero
  const sequentialNumber = (index + 1).toString().padStart(2, "0");

  return (
    <div className="trending">
      <div className="trending-song">
        <span className="song-number">{sequentialNumber}</span>
        <div className="song-details">
          <h5 className="song-name">Song Name</h5>
          <p className="artist-name">
            <FaUser className="artist-icon" /> Artist Name
          </p>
        </div>
        <div className="play-buttons">
          <FaPlayCircle className="play-button" />
          <HiDotsVertical className="dots-button" />
        </div>
      </div>
    </div>
  );
};

export default Trending;
