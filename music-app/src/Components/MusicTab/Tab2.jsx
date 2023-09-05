import React from "react";
import songImg from "./song-img.jpg"; // Tell webpack this JS file uses this image
import { AiOutlineHeart } from "react-icons/ai";
import {
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbRepeat,
  TbArrowsShuffle,
} from "react-icons/tb";
import { RxTrackNext, RxTrackPrevious } from "react-icons/rx";
import "./MusicTab.css"; //stylesheet

export default function Tab1() {
  return (
    <div className="tab tab-2">
      <div className="song-info">
        <img src={songImg} alt="" className="songImg" />
        <div className="names">
          <h3 className="song-name">Vegas</h3>
          <h6 className="artist-name">Flo Nocturn</h6>
        </div>
        <AiOutlineHeart className="like-song" />
      </div>

      <div className="play">
        <div className="play-btns">
          <TbArrowsShuffle className="shuffle-btn" />
          <RxTrackPrevious className="prev-btn" />
          <TbPlayerPlayFilled className="play-btn" />
          <RxTrackNext className="next-btn" />
          <TbRepeat className="repeat-btn" />
        </div>
      </div>
    </div>
  );
}
