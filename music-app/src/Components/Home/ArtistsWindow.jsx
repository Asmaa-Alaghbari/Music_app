// ArtistsWindow.jsx

import React from "react"; // React
import { MdNavigateBefore } from "react-icons/md"; // Back button icon
import { Link } from "react-router-dom"; // Back button to Home Page
import Playlist from "../Playlist/HomePlaylist"; // Home Page
import CardArtist from "./CardArtists"; // Card for each artist

import "./ArtistsWindow.css"; // Stylesheet

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
