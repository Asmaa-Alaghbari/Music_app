// App.js is the main file of the project

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Playlist from "./Components/Playlist/HomePlaylist";
import PlaylistsWindow from "./Components/Playlist/PlaylistsWindow";
import GenresWindow from "./Components/Playlist/GenresWindow";
import Sidenav from "./Components/Sidenav/Sidenav";
import MusicTab from "./Components/MusicTab/MusicTab";
import OpenedPlaylist from "./Components/Playlist/OpenedPlaylist";

import "./App.css";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="components">
          <Sidenav />
          <div className="explore">
            <Routes>
              <Route path="/" element={[<Home />, <Playlist />]} />
              <Route path="playlists-window" element={<PlaylistsWindow />} />
              <Route path="genres-window" element={<GenresWindow />} />
              <Route path="opened-playlist" element={<OpenedPlaylist />} />
            </Routes>
          </div>
        </div>
        <MusicTab />
      </BrowserRouter>
    </div>
  );
}
