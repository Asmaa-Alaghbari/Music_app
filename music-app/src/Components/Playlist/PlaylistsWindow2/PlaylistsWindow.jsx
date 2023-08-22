import { MdNavigateBefore } from "react-icons/md"; //Back arrow icon
import { Link } from "react-router-dom"; //to use the link
import Playlist from "../Playlist"; //to go back in the Home Page
import Cards from "./Cards";
import "./PlaylistsWindow.css";

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
