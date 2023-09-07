import React, { useEffect } from "react";
import axios from "axios"; // library
import { useStateProvider } from "../../utils/stateProvider";
import { reducerCases } from "../../utils/constants";
import { Link } from "react-router-dom"; // use to open Opened Playlist page
import { AiFillPlayCircle } from "react-icons/ai"; // play button icon
import OpenedPlaylist from "./OpenedPlaylist";
import "./PlaylistsWindow.css"; // Stylesheet

export default function Cards() {
  return (
    <div className="card">
      <div className="content">
        {/* Add a unique key */}
        <div className="img-container">
          {/* Playlist's image */}
          {/* <img src={} className="img-bkg" /> */}

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
        <h4>{}</h4>
        {/* Artist's name */}
        <h5>{}</h5>
      </div>
    </div>
  );
}
