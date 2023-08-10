import React from "react";
import "./Main.css";
import Image from "./Image";

const Home = () => {
  return (
    <div className="Home">
      <p className="par1">Musikinaja</p>
      <p className="par2"> Listen to treading songs all the time</p>
      <p className="par3">
        With Musikinaja, you can get premium music for free anywhere and at any
        time
      </p>
      <button className="btn">Explore Now</button>
      <Image className="girl" />
    </div>
  );
};

export default Home;
