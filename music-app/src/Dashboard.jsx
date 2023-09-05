// the file for all the components

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Playlist from "./Components/Playlist/HomePlaylist"; // Playlist on Landing page
import PlaylistsWindow from "./Components/Playlist/PlaylistsWindow"; // Playlists Window page
import GenresWindow from "./Components/Playlist/GenresWindow"; // Genre Window page
import OpenedPlaylist from "./Components/Playlist/OpenedPlaylist"; //Opened Playlist page
import Sidenav from "./Components/Sidenav/Sidenav";
import MusicTab from "./Components/MusicTab/MusicTab";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <div className="components">
            <Sidenav />
            <div className="explore">
              <Routes>
                <Route path="/" element={[<Playlist />]} />
                <Route path="playlists-window" element={<PlaylistsWindow />} />
                <Route path="genres-window" element={<GenresWindow />} />
                <Route path="opened-playlist" element={<OpenedPlaylist />} />
              </Routes>
            </div>
          </div>
          <MusicTab />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default Dashboard;
