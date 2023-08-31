// Main.jsx

import React from "react";
import girl from "./girl.png";

import "./Main.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="home-paragraphs">
        <p className="par1"> Listen to trending songs all the time</p>
        <p className="par2">
          With Musikinaja, you can get premium music for free anywhere and at
          any time
        </p>
        <button className="btn">Explore Now</button>
      </div>
      {/* <img src={girl} alt="poster" className="poster" /> */}
    </div>
  );
};

export default Home;
