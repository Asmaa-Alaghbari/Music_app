// App.js is the main file of the project

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { reducerCases } from "./utils/constants";
import { useStateProvider } from "./utils/stateProvider";
import Login from "./Components/Login/Login"; // Login components
import Home from "./Components/Home/Home";
import Playlist from "./Components/Playlist/HomePlaylist"; // Playlist on Landing page
import PlaylistsWindow from "./Components/Playlist/PlaylistsWindow"; // Playlists Window page
import GenresWindow from "./Components/Playlist/GenresWindow"; // Genre Window page
import OpenedPlaylist from "./Components/Playlist/OpenedPlaylist"; //Opened Playlist page
import Sidenav from "./Components/Sidenav/Sidenav";
import MusicTab from "./Components/MusicTab/MusicTab";

import "./App.css";

function App() {
  const [{ token }, dispatch] = useStateProvider();

  // get the access token from the loginUrl
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return (
    <div>
      {token ? (
        <BrowserRouter>
          <div>
            <div className="components">
              <Sidenav />
              <div className="explore">
                <Routes>
                  <Route path="/" element={[<Home />, <Playlist />]} />
                  <Route
                    path="playlists-window"
                    element={<PlaylistsWindow />}
                  />
                  <Route path="genres-window" element={<GenresWindow />} />
                  <Route path="opened-playlist" element={<OpenedPlaylist />} />
                </Routes>
              </div>
            </div>
            <MusicTab />
          </div>
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
