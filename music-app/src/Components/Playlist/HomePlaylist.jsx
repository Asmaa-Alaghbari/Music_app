import PlaylistContainer from "./PlaylistContainer"; //Playlist Component
import GenreContainer from "./GenreContainer"; //Genre Component

import "./HomePlaylist.css"; //Stylesheet

export default function Playlist() {
  return (
    <div className="playlists">
      <PlaylistContainer />
      <GenreContainer />
      <div className="empty-div"></div>
    </div>
  );
}
