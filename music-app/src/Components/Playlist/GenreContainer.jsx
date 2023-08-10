import CardGenre from "./CardGenre";

import "./Playlist.css";

export default function GenreContainer() {
  return (
    <div className="genre-container">
      <div className="infos">
        <h2>Genres</h2>
        <a href="/">See More</a>
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
