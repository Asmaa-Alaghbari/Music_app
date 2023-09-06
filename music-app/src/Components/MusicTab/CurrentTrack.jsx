import React, { useEffect } from "react";

import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

import "./MusicTab";

export default function CurrentTrack() {
  return (
    <div className="bar">
      <Tab1 />
      <Tab2 />

      <div className="tab tab-3"></div>
    </div>
  );
}
