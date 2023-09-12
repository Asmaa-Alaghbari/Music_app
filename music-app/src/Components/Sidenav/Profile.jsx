// Profile.jsx

import React from "react";
import Modal from "react-modal"; // Modal
import { Link } from "react-router-dom"; // Link to profile edit page
import ProfilePicture from "./images/ProfilePicture.png"; // Profile picture

import "./Profile.css"; // Stylesheet

// Modal for modifying profile
Modal.setAppElement("#root");

export default function Profile({ closeSidenav }) {
  return (
    <>
      <div className="profile">
        <div className="profile-img-container">
          <Link to="profile-edit">
            <img src={ProfilePicture} alt="Profile" className="profile-img" />
            <span className="edit-profile-text">Edit Profile</span>
          </Link>
        </div>
        <h3 className="profile-username">Username</h3>
        <p className="profile-bio">Bio</p>
      </div>
    </>
  );
}
