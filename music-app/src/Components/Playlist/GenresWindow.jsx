import { MdNavigateBefore } from "react-icons/md"; //Back arrow icon
import { Link } from "react-router-dom"; //to use the link
import Playlist from "./HomePlaylist"; //to go back in the Home Page
import GenreCard from "./GenresWindowCard";
import "./GenresWindow.css";

export default function GenreWindow() {
  return (
    <div className="box">
      {/* Back button from GenreWindow to Home Page*/}
      <Link to="/" component={Playlist} className="back-btn">
        <MdNavigateBefore />
      </Link>

      <h1>Genres</h1>

      <div className="cards-list">
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
        <GenreCard />
      </div>
    </div>
  );
}
