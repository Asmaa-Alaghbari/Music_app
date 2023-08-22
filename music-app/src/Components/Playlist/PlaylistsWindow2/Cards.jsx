import "./PlaylistsWindow.css";
import sec from "./sec.png";

export default function Cards() {
  return (
    <div className="card">
      <div className="content">
        <img src={sec} className="img-bkg" />
        <h4>Playlist's name</h4>
        <h5>Artist one, Artist 2, Artist 3, ...</h5>
      </div>
    </div>
  );
}
