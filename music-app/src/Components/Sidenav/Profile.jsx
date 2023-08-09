// Profile.jsx

import React from "react";
import ProfilePicture from "./images/ProfilePicture.png"; // Profile picture

import "./Profile.css"; // Stylesheet

export default function Profile() {
  return (
    <div className="profile">
      <img src={ProfilePicture} alt="Profile" className="profile-img" />
      <h3 className="profile-username">Username</h3>
      <p className="profile-bio">Bio</p>
    </div>
  );
}
