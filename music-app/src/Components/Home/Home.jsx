// Home.jsx

import React, { useEffect, useState } from "react";
import Main from "./Main";
import Header from "./Header";
import Trending from "./Trending";
import TopArtists from "./TopArtists";
import { GrPrevious, GrNext } from "react-icons/gr"; // left arrow icon and right arrow icon

import "./Home.css";

export default function Home() {
  // Number of trending items to display
  const numTrendingItems = 3;
  const trendingItems = [];
  for (let i = 0; i < numTrendingItems; i++) {
    trendingItems.push(<Trending key={i} index={i} />);
  }

  // Number of Top Artists items to display
  const [numTopArtistItems, setNumTopArtistItems] = useState(5);
  useEffect(() => {
    // Update the number of top artist items based on screen width
    const updateNumTopArtists = () => {
      if (window.innerWidth >= 1024) {
        setNumTopArtistItems(8); // Display more items on larger screens
      } else if (window.innerWidth <= 480) {
        setNumTopArtistItems(3); // Display less items on smaller screens
      } else {
        setNumTopArtistItems(4); // Default number of items
      }
    };

    // Initial call
    updateNumTopArtists();

    // Update on window resize
    window.addEventListener("resize", updateNumTopArtists);

    return () => {
      window.removeEventListener("resize", updateNumTopArtists);
    };
  }, []);

  // Create the top artist items
  const topArtistItems = [];
  for (let i = 0; i < numTopArtistItems; i++) {
    topArtistItems.push(<TopArtists key={i} />);
  }

  return (
    <div className="container">
      <Header />
      <div className="main-components">
        <Main />

        {/* Trending */}
        <div className="trending-container">
          <h2 className="trending-title">Trending</h2>
          {trendingItems}
          <p className="see-more">See More</p>
        </div>
      </div>

      {/* Top Artists */}
      <div className="topArtist-container">
        <div className="topArtist-header">
          <h2 className="topArtist-title">Top Artist</h2>
          <p className="see-more">See More</p>
        </div>
        <div className="topArtist-elements">
          <GrPrevious className="topArtist-arrow" />
          <div className="topArtist-items">{topArtistItems}</div>
          <GrNext className="topArtist-arrow" />
        </div>
      </div>
    </div>
  );
}
