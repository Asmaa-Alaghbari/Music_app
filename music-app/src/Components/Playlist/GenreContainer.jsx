import { Link } from "react-router-dom"; // use to open Genre Window page
import GenresWindow from "./GenresWindow";
import CardGenre from "./GenreContainerCard";

import "./HomePlaylist.css"; //stylesheet

export default function GenreContainer() {
  return (
    <div className="genre-container">
      <div className="infos">
        <h2>Genres</h2>

        {/* Show all Genres*/}
        <Link
          to="/genres-window"
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
