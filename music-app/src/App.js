// App.js is the main file of the project

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Playlist from "./Components/Playlist/Playlist";
import PlaylistsWindow from "./Components/Playlist/PlaylistsWindow2/PlaylistsWindow";
import Sidenav from "./Components/Sidenav/Sidenav";
import MusicTab from "./Components/MusicTab/MusicTab";

import "./App.css";

function App() {
  return (
    <div>
      <div className="components">
        <Sidenav />
        <div className="explore">
          {/* <Home /> */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Playlist />} />
              <Route path="playlists-window" element={<PlaylistsWindow />} />
              {/* <Route path="genres-window" element={<GenresWindow />} /> */}
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      {/* <MusicTab /> */}
    </div>
  );
}

export default App;
