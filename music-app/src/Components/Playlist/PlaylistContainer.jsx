import React from "react";
import { Link } from "react-router-dom";
import { GrPrevious, GrNext } from "react-icons/gr"; // left and right icons
import CardPlaylist from "./CardPlaylist";
import "./PlayList.css";
import PlaylistsWindow from "./PlaylistsWindow2/PlaylistsWindow";

export default function PlaylistContainer() {
  return (
    <div className="playlist-container">
      <div className="infos">
        <h2>Playlists</h2>

        {/* Show all playlists */}
        <Link
          to="/playlists-window"
          component={PlaylistsWindow}
          className="seeMorebtn"
        >
          See More
        </Link>
      </div>

      <div className="card-playlist-list">
        {/* Back button */}
        <button className="arrow arrow-left">
          <GrPrevious />
        </button>
        {/* Next button */}
        <button className="arrow arrow-right">
          <GrNext />
        </button>
        <div className="list-container">
          <CardPlaylist />
          <CardPlaylist />
          <CardPlaylist />
          <CardPlaylist />
          <CardPlaylist />
          <CardPlaylist />
        </div>
      </div>
    </div>
  );
}
