import PlaylistContainer from "./PlaylistContainer";
import GenreContainer from "./GenreContainer";
import "./Playlist.css";

export default function Playlist() {
  return (
    <div className="playlists">
      <PlaylistContainer />
      <GenreContainer />
    </div>
  );
}
