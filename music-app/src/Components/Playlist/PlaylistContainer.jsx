import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import CardPlaylist from "./CardPlaylist";

import "./Playlist.css";

export default function PlaylistContainer() {
  return (
    <div className="playlist-container">
      <div className="infos">
        <h2>Playlists</h2>
        <a href="/">See More</a>
      </div>
      <div div className="card-playlist-list">
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
