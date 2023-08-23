// App.js is the main file of the project

import React from "react";
import Home from "./Components/Home/Home";
import Playlist from "./Components/Playlist/Playlist";
import Sidenav from "./Components/Sidenav/Sidenav";
import MusicTab from "./Components/MusicTab/MusicTab";

import "./App.css";

export default function App() {
  return (
    <div>
      <div className="components">
        <div className="explore">
          <Home />
          <Playlist />
        </div>
        <Sidenav />
      </div>
      <MusicTab />
    </div>
  );
}
