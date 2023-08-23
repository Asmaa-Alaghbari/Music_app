import { Link } from "react-router-dom";
import CardGenre from "./GenreContainerCard";
import GenresWindow from "./GenresWindow";

import "./HomePlaylist.css";

export default function GenreContainer() {
  return (
    <div className="genre-container">
      <div className="infos">
        <h2>Genres</h2>

        {/* Show all Gernes*/}
        <Link
          to="/geres-window"
          component={GenresWindow}
          className="seeMorebtn"
        >
          See More
        </Link>
      </div>
      <div className="card-genre-list">
        <CardGenre />
        <CardGenre />
        <CardGenre />
        <CardGenre />
        <CardGenre />
        <CardGenre />
      </div>
    </div>
  );
}
