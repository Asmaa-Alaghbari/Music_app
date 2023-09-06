// ArtistsWindow.jsx

import React from "react"; // React
import { MdNavigateBefore } from "react-icons/md"; // Back button icon
import { Link } from "react-router-dom"; // Back button to Home Page
import Playlist from "../Playlist/HomePlaylist"; // Home Page
import Artist from "./Images/Artist.jpeg"; // Artist image

import "./ArtistsWindow.css"; // Stylesheet

// Card for each artist
export function CardArtist({ index }) {
  return (
    <div className="artists-card">
      <img src={Artist} alt="artists-img" className="artists-img" />
      <h4 className="artists-name">Artist Name</h4>
    </div>
  );
}

// Artists Window
export default function ArtistsWindow() {
  // Number of artists cards
  const numberOfArtistsCard = 12;
  const artistsCard = [];
  for (let i = 0; i < numberOfArtistsCard; i++) {
    artistsCard.push(<CardArtist index={i} />);
  }

  return (
    <div className="box">
      {/* Back button from ArtistsWindow to Home Page*/}
      <Link to="/" component={Playlist} className="back-btn">
        <MdNavigateBefore />
      </Link>

      <h1>Artists</h1>
      <div className="artist-list">{artistsCard}</div>
    </div>
  );
}

