import { AiFillPlayCircle } from "react-icons/ai"; // play button icon
import { Link } from "react-router-dom"; // use to open Opened Playlist page
import OpenedPlaylist from "./OpenedPlaylist";
import sec from "./sec.png";

import "./PlaylistsWindow.css"; // Stylesheet

export default function Cards() {
  return (
    <div className="card">
      <div className="content">
        <div className="img-container">
          {/* Playlist's image */}
          <img src={sec} className="img-bkg" />

          {/* Play Button */}
          <Link
            to="/opened-playlist"
            component={OpenedPlaylist}
            className="buttonPlay"
          >
            <AiFillPlayCircle />
          </Link>
        </div>

        {/* Playlist's name */}
        <h4>Playlist's name</h4>

        {/* Artist's name */}
        <h5>Artist one, Artist 2, Artist 3, ...</h5>
      </div>
    </div>
  );
}
