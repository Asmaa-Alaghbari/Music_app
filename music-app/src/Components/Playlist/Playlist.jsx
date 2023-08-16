import "./Playlist.css";
import PlaylistContainer from "./PlaylistContainer"; //Playlist Component
import GenreContainer from "./GenreContainer"; //Genre Component
import React from "react";
import {
  Routes,
  Route,
  useNavigate,
  Link,
  BrowserRouter,
} from "react-router-dom";
import PlaylistsWindow from "./PlaylistsWindow";

export default function Playlist() {
  return (
    <div className="playlists">
      <BrowserRouter>
        <Routes>
          <Route path="/PlaylistsWindow" element={<PlaylistsWindow />} />
          {/* alte rute */}
        </Routes>
      </BrowserRouter>

      <PlaylistContainer />
      <GenreContainer />
    </div>
  );
}
