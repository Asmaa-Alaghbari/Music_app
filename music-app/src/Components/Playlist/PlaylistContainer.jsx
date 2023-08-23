import React from "react";
import { Link } from "react-router-dom"; // use to open Playlists Window page
import PlaylistsWindow from "./PlaylistsWindow";
import { GrPrevious, GrNext } from "react-icons/gr"; // left arrow icon and right arrow icon
import CardPlaylist from "./PlaylistContainerCard";

import "./HomePlaylist.css"; //Stylesheet

export default function PlaylistContainer() {
  window.onload = function () {
    const buttonLeft = document.getElementById("slideLeft");
    const buttonrRight = document.getElementById("slideRight");

    buttonLeft.onclick = () => {
      document.getElementById("playlist-container").scrollLeft -= 20;
    };
    buttonrRight.onclick = () => {
      document.getElementById("playlist-container").scrollLeft += 20;
    };
  };

  return (
    <div className="playlist-container">
      <div className="infos">
        <h2>Playlists</h2>

        {/* Show all playlists */}
        <Link
          to="/playlists-window"
          component={PlaylistsWindow}
          className="seeMorebtn"
        >
          See More
        </Link>
      </div>

      <div className="card-playlist-list">
        {/* Back button */}
        <button className="arrow arrow-left" id="slideLeft">
          <GrPrevious />
        </button>
        {/* Next button */}
        <button className="arrow arrow-right" id="slideRight">
          <GrNext />
        </button>
        <div className="list-container">
          <CardPlaylist />
          <CardPlaylist />
          <CardPlaylist />
          <CardPlaylist />
          <CardPlaylist />
          <CardPlaylist />
        </div>
      </div>
    </div>
  );
}
