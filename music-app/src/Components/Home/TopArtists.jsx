import React from "react";
import "./TopArtists.css";
import { FaUser } from "react-icons/fa";
import { PiDotBold } from "react-icons/pi";
import { FaPlayCircle } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";

const TopArtists = () => {
  return (
    <div className="TopArtists">
      <div className="songscontainer">
        <div className="songs">
          <div className="count">01</div>
          <div className="song">
            <div className="imgBox">
              <img src="" alt="" />
            </div>
            <div className="section">
              <p className="songName">
                Song Name
                <p className="spanArtist">
                  <FaUser className="user" />
                  Artist name <PiDotBold /> Music Genre
                </p>
              </p>
              <div className="time">
                00:00 <FaPlayCircle className="playbtn" />
                <HiDotsVertical className="dots" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtists;
