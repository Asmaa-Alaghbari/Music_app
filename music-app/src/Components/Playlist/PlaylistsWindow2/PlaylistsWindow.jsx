import { MdNavigateBefore } from "react-icons/md"; //Back arrow icon
import { Link } from "react-router-dom";
import Playlist from "../Playlist";

import Cards from "./Cards";

import "./PlaylistsWindow.css";

export default function PlaylistsWindow() {
  return (
    <div className="box">
      <div className="buttons">
        <Link to="/" component={Playlist} className="back-btn">
          <MdNavigateBefore />
        </Link>
      </div>

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
