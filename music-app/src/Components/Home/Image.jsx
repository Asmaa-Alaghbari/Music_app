import React from "react";
import girl from "./girl.png";
import "./Image.css";

const Image = () => {
  return (
    <div>
      <img src={girl} alt="girl" className="girl" width="30%" />
    </div>
  );
};

export default Image;
