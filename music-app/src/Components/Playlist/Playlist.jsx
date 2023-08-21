import PlaylistContainer from "./PlaylistContainer"; //Playlist Component
import GenreContainer from "./GenreContainer"; //Genre Component

import "./Playlist.css";

export default function Playlist() {
  return (
    <div className="playlists">
      <PlaylistContainer />
      <GenreContainer />
    </div>
  );
}
