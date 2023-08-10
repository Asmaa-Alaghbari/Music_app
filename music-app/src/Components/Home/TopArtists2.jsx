import React from "react";
import "./TopArtists2.css";
import { PiDotBold } from "react-icons/pi";
import { RiHeartsFill } from "react-icons/ri";
import { BsSoundwave } from "react-icons/bs";

const TopArtists2 = () => {
  return (
    <div>
      <div className="TopArtists">
        <div className="songscontainer">
          <div className="songs">
            <div className="song">
              <div className="imgBox">
                <img src="" alt="" />
              </div>
              <div className="section">
                <p className="ArtistName">
                  Artist Name
                  <p className="folowers">
                    <RiHeartsFill className="heart" /> 1928 Folowers{" "}
                    <PiDotBold /> <BsSoundwave className="soundwave" />
                    122M Plays
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopArtists2;
