import "./MusicTab.css";
import "./slider_style.css";
import React, { useState } from "react";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { MdOutlineSaveAlt } from "react-icons/md";
import {
  TbPlayerPauseFilled,
  TbPlayerPlayFilled,
  TbPlayerSkipForwardFilled,
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
  TbPlayerSkipBackFilled,
  TbRepeat,
  TbArrowsShuffle,
} from "react-icons/tb";

export default function Music_Tab(props) {
  let min, sec1, sec2, min2, sec12, sec22;
  const max = 100;

  const [sound, setsound] = useState(false);
  const [play, setplay] = useState(false);
  const [heart, setheart] = useState(false);
  const [heartcolor, setheartcolor] = useState("white");
  const [save, setsave] = useState(false);
  const [savecolor, setsavecolor] = useState("white");
  const [repeat, setrepeat] = useState(false);
  const [repeatcolor, setrepeatcolor] = useState("white");
  const [shuffle, setshuffle] = useState(false);
  const [shufflecolor, setshufflecolor] = useState("white");
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(50);
  const [v, setv] = useState(50);

  min = Math.floor(value1 / 60);
  sec1 = Math.floor((value1 % 60) / 10);
  sec2 = (value1 % 60) % 10;
  min2 = Math.floor((max - value1) / 60);
  sec12 = Math.floor(((max - value1) % 60) / 10);
  sec22 = ((max - value1) % 60) % 10;

  const soundic = () => {
    setsound(!sound);
    if (sound === false) {
      setv(value2);
      setValue2(0);
    } else {
      setValue2(v);
    }
  };

  const play_pause = () => {
    setplay(!play);
  };

  const like = () => {
    setheart(!heart);
    setheartcolor(heart ? "white" : "red");
  };

  const saveic = () => {
    setsave(!save);
    setsavecolor(save ? "white" : "gold");
  };

  const repeatic = () => {
    setrepeat(!repeat);
    setrepeatcolor(repeat ? "white" : "gold");
  };

  const shuffleic = () => {
    setshuffle(!shuffle);
    setshufflecolor(shuffle ? "white" : "gold");
  };

  return (
    <div className="bar">
      <div className="tab1">
        <img id="image" src={require("./artist.jpg")}></img>

        <div className="ti-art">
          <div id="title">Oceans Speak</div>

          <div id="artist">Oceans Speak</div>
        </div>
      </div>

      <div className="tab2">
        <div className="music-player">
          <div id="like" onClick={like} style={{ color: heartcolor }}>
            {heart ? <AiFillHeart /> : <AiOutlineHeart />}
          </div>

          <div id="save" onClick={saveic} style={{ color: savecolor }}>
            <MdOutlineSaveAlt />
          </div>

          <div id="skip-back">
            <TbPlayerSkipBackFilled />
          </div>

          <div id="prev">
            <TbPlayerTrackPrevFilled />
          </div>

          <div id="pause" onClick={play_pause}>
            {play ? <TbPlayerPlayFilled /> : <TbPlayerPauseFilled />}
          </div>

          <div id="next">
            <TbPlayerTrackNextFilled />
          </div>

          <div id="skip-forward">
            <TbPlayerSkipForwardFilled />
          </div>

          <div id="repeat" onClick={repeatic} style={{ color: repeatcolor }}>
            <TbRepeat />
          </div>

          <div id="shuffle" onClick={shuffleic} style={{ color: shufflecolor }}>
            <TbArrowsShuffle />
          </div>
        </div>

        <div className="music">
          <div id="m1">{min + ":" + sec1 + sec2}</div>

          <div className="b">
            <input
              type="range"
              min="0"
              max="max"
              step="1"
              className="slider1"
              id="myRange1"
              value3="value1"
              defaultValue="0"
              onChange={(e) => setValue1(e.target.value)}
            ></input>
          </div>

          <div id="m2">{"-" + min2 + ":" + sec12 + sec22}</div>
        </div>
      </div>

      <div className="tab3">
        <div id="sound-ic" onClick={soundic}>
          {sound ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
        </div>

        <div className="sound">
          <input
            type="range"
            min="0"
            max="max"
            step="1"
            className="slider2"
            id="myRange2"
            onChange={(f) => setValue2(f.target.value)}
            defaultValue="50"
            value4="value2"
          ></input>
        </div>
        <div id="soundValue">{value2}</div>
      </div>
    </div>
  );
}
