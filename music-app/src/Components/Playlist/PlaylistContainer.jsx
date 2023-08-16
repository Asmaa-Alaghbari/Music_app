import React from "react";
import {
  Routes,
  Route,
  useNavigate,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { GrPrevious, GrNext } from "react-icons/gr";
import CardPlaylist from "./CardPlaylist";
import "./Playlist.css";

export default function PlaylistContainer() {
  const navigate = useNavigate();

  const handleSeeMoreClick = () => {
    navigate("/PlaylistsWindow");
  };

  return (
    <div className="playlist-container">
      <div className="infos">
        <h2>Playlists</h2>

        <button onClick={handleSeeMoreClick}>See More</button>
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
