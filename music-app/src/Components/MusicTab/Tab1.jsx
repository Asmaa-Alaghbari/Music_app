//Tab1 component (for small screens)

import React from "react";
import songImg from "./song-img.jpg"; // Tell webpack this JS file uses this image
import { AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPauseFilled, TbPlayerPlayFilled } from "react-icons/tb";
import "./MusicTab.css"; //stylesheet

export default function Tab1() {
  return (
    <div className="tab tab-1">
      <div className="song-info">
        <img src={songImg} alt="" className="songImg" />
        <div className="names">
          <h3 className="song-name">Vegas</h3>
          <h6 className="artist-name">Flo Nocturn</h6>
        </div>
      </div>
      <div className="btns">
        <AiOutlineHeart className="like-song" />
        <TbPlayerPlayFilled className="play-music-small-screen" />
      </div>
    </div>
  );
}
