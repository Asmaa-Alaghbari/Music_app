import { MdNavigateBefore } from "react-icons/md";
import Cards from "./Cards";

import "./PlaylistsWindow.css";

export default function PlaylistsWindow() {
  return (
    <div className="box">
      <div className="buttons">
        <button className="back-btn">
          <MdNavigateBefore />
        </button>
      </div>
      <h1>Playlists</h1>
      <div className="cards-list">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}
