import React from "react";
import Main from "./Main";
import Header from "./Header";
import "./Home.css";
import TopArtists from "./TopArtists";
import TopArtists2 from "./TopArtists2";

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="maincomponents">
        <Main />

        <div className="artist">
          <h2 className="title">Trending</h2>
          <TopArtists />
          <TopArtists />
          <TopArtists />

          <p className="seemore">See More</p>
        </div>
      </div>

      <div className="Top">
        <h2>Top Artist:</h2>
        <TopArtists2 />
        <TopArtists2 />
        <TopArtists2 />
        <p className="seemore2">See More</p>
      </div>
    </div>
  );
}

export default Home;
