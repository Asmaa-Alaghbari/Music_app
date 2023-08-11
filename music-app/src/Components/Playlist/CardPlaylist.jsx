import { AiFillPlayCircle } from "react-icons/ai"; //play button icon
import { PiMusicNotesFill } from "react-icons/pi"; //music note icon

import "./Playlist.css";

export default function CardPlaylist() {
  return (
    <div className="cardPlaylist">
      <div className="card-container">
        <div className="info-card">
          <h5>Playlist Name</h5>
          <div className="tracks-container">
            <div className="music-note">
              <PiMusicNotesFill />
            </div>

            <h6>No. tracks</h6>
          </div>
        </div>
        <button>
          <AiFillPlayCircle />
        </button>
      </div>
    </div>
  );
}
