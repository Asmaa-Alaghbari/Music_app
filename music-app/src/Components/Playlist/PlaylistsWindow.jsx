import { MdNavigateBefore } from "react-icons/md"; // back arrow icon
import { Link } from "react-router-dom"; // use to go back in the home Page
import Playlist from "./HomePlaylist";
import Cards from "./PlaylistsWindowCards";
import "./PlaylistsWindow.css"; // staylesheet

export default function PlaylistsWindow() {
  return (
    <div className="box">
      {/* Back button from PlaylistsWindow to Home Page*/}
      <Link to="/" component={Playlist} className="back-btn">
        <MdNavigateBefore />
      </Link>

      <h1>Playlists</h1>

      <div className="cards-list">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
