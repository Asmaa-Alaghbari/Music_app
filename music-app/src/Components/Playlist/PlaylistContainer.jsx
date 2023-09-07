import React from "react";
import { Link } from "react-router-dom"; // use to open Playlists Window page
import PlaylistsWindow from "./PlaylistsWindow";
import { GrPrevious, GrNext } from "react-icons/gr"; // left and right arrow icons
import CardPlaylist from "./PlaylistContainerCard";

import "./HomePlaylist.css"; //Stylesheet

export default function PlaylistContainer() {
  /* Create an array with 8 elements */
  const playlists = new Array(8).fill(null);
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
        {/* display the first 8 playlists because that's the length of the array that i created */}
        <div className="list-container">
          {playlists.map((_, index) => (
            <CardPlaylist key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
