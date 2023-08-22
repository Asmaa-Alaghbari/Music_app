import CardGenre from "./CardGenre";

import "./PlayList.css";

export default function GenreContainer() {
  return (
    <div className="genre-container">
      <div className="infos">
        <h2>Genres</h2>
        <button>See More</button>
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
