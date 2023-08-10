import "./MusicTab.css";
import "./slider_style.css";
import React, { useState } from "react";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineSaveAlt } from "react-icons/md";
import {
  TbPlayerPauseFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
  TbPlayerSkipBackFilled,
  TbRepeat,
  TbArrowsShuffle,
} from "react-icons/tb";

export default function Music_Tab(props) {
  const [active, setActive] = useState(false);
  return (
    <div class="bar">
      <div class="tab1">
        <img id="image" src={require("./artist.jpg")}></img>
        <div class="ti-art">
          <div id="title">Oceans Speak</div>
          <div id="artist">Oceans Speak</div>
        </div>
      </div>

      <div class="tab2">
        <div class="mp=slide">
          <div class="music-player">
            <div id="like">
              <div isActive={active} onClick={() => setActive(!active)}>
                <AiOutlineHeart />
              </div>
            </div>
            <div id="save">
              <MdOutlineSaveAlt />
            </div>
            <div id="skip-back">
              <TbPlayerSkipBackFilled />
            </div>
            <div id="prev">
              <TbPlayerTrackPrevFilled />
            </div>
            <div id="pause">
              <TbPlayerPauseFilled />
            </div>
            <div id="next">
              <TbPlayerTrackNextFilled />
            </div>
            <div id="skip-forward">
              <TbPlayerSkipForwardFilled />
            </div>
            <div id="repeat">
              <TbRepeat />
            </div>
            <div id="shuffle">
              <TbArrowsShuffle />
            </div>
          </div>
          <div class="music">
            <input
              type="range"
              min="1"
              max="100"
              value="100"
              class="slider"
              id="myRange"
            ></input>
          </div>
        </div>
      </div>

      <div class="tab3">
        <div id="sound-ic">
          <BsFillVolumeUpFill />
        </div>
        <div class="sound">
          <input
            type="range"
            min="1"
            max="100"
            value="100"
            class="slider"
            id="myRange"
          ></input>
        </div>
      </div>
    </div>
  );
}
