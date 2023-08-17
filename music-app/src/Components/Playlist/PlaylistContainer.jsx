import React from "react";
import { Link } from "react-router-dom";
import { GrPrevious, GrNext } from "react-icons/gr";
import CardPlaylist from "./CardPlaylist";
import "./Playlist.css";
import PlaylistsWindow from "./PlaylistsWindow2/PlaylistsWindow";

export default function PlaylistContainer() {
  return (
    <div className="playlist-container">
      <div className="infos">
        <h2>Playlists</h2>

        <Link to="/playlists-window" component={PlaylistsWindow}>
          See More
        </Link>
      </div>

      <div className="card-playlist-list">
        <button className="arrow arrow-left">
          <GrPrevious />
        </button>
        <button className="arrow arrow-right">
          <GrNext />
        </button>
        <div className="list-container">
          <CardPlaylist />
          <CardPlaylist />
          <CardPlaylist />
          <CardPlaylist />
        </div>
      </div>
    </div>
  );
}
