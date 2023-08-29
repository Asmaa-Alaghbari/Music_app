// App.js is the main file of the project

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Playlist from "./Components/Playlist/HomePlaylist"; // Playlist on Landing page
import PlaylistsWindow from "./Components/Playlist/PlaylistsWindow"; // Playlists Window page
import GenresWindow from "./Components/Playlist/GenresWindow"; // Genre Window page
import OpenedPlaylist from "./Components/Playlist/OpenedPlaylist"; //Opened Playlist page
import Sidenav from "./Components/Sidenav/Sidenav";
import MusicTab from "./Components/MusicTab/MusicTab";
import Login from "./Login";
import { getTokenFromUrl } from "./MusicApp";

import "./App.css";

function App() {
  const [token, setToken] = useState(null);

  //Run code bassed on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token; //_token is a temporary token, we don't use it in other part

    if (_token) {
      setToken(_token);
    }

    console.log("I have a token ", token);
  }, []);

  return (
    <BrowserRouter>
      <div>
        {token ? <h1>I am logged in</h1> : <Login />}
        <Routes>
          <Route path="/" element={[<Sidenav />, <Playlist />, <MusicTab />]} />
          <Route path="playlists-window" element={<PlaylistsWindow />} />
          <Route path="genres-window" element={<GenresWindow />} />
          <Route path="opened-playlist" element={<OpenedPlaylist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
