import "./MusicTab.css";
import "./slider_style.css";
import React, { useState } from "react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

export default function Music_Tab(props) {
  // let min, sec1, sec2, min2, sec12, sec22;
  // const max = 100;

  // const [sound, setsound] = useState(false);
  // const [play, setplay] = useState(false);
  // const [heart, setheart] = useState(false);
  // const [heartcolor, setheartcolor] = useState("white");
  // const [save, setsave] = useState(false);
  // const [savecolor, setsavecolor] = useState("white");
  // const [repeat, setrepeat] = useState(false);
  // const [repeatcolor, setrepeatcolor] = useState("white");
  // const [shuffle, setshuffle] = useState(false);
  // const [shufflecolor, setshufflecolor] = useState("white");
  // const [value1, setValue1] = useState(0);
  // const [value2, setValue2] = useState(50);
  // const [v, setv] = useState(50);

  // min = Math.floor(value1 / 60);
  // sec1 = Math.floor((value1 % 60) / 10);
  // sec2 = (value1 % 60) % 10;
  // min2 = Math.floor((max - value1) / 60);
  // sec12 = Math.floor(((max - value1) % 60) / 10);
  // sec22 = ((max - value1) % 60) % 10;

  // const soundic = () => {
  //   setsound(!sound);
  //   if (sound === false) {
  //     setv(value2);
  //     setValue2(0);
  //   } else {
  //     setValue2(v);
  //   }
  // };

  // const play_pause = () => {
  //   setplay(!play);
  // };

  // const like = () => {
  //   setheart(!heart);
  //   setheartcolor(heart ? "white" : "red");
  // };

  // const saveic = () => {
  //   setsave(!save);
  //   setsavecolor(save ? "white" : "gold");
  // };

  // const repeatic = () => {
  //   setrepeat(!repeat);
  //   setrepeatcolor(repeat ? "white" : "gold");
  // };

  // const shuffleic = () => {
  //   setshuffle(!shuffle);
  //   setshufflecolor(shuffle ? "white" : "gold");
  // };

  return (
    <div className="bar">
      <Tab1 />
      <Tab2 />

      <div className="tab tab-3"></div>
    </div>
  );
}
