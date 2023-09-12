// ProfileEditPage.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Back button to Home Page
import { MdNavigateBefore } from "react-icons/md"; // Back button icon
import ProfilePicture from "./images/ProfilePicture.png"; // Profile picture
import Playlist from "../Playlist/HomePlaylist"; // Home Page

import "./ProfileEditPage.css"; // Stylesheet

export default function ProfileEditPage() {
  // Profile information
  const defaultProfileImage = ProfilePicture; // Default profile picture
  const [profileImage, setProfileImage] = useState(ProfilePicture); // State for profile picture
  const [username, setUsername] = useState(""); // State for username
  const [bio, setBio] = useState(""); // State for bio
  const [pendingChanges, setPendingChanges] = useState(false); // Track pending changes
  const [successMessage, setSuccessMessage] = useState(""); // Success save message

  // Load saved profile data from localStorage on component mount
  useEffect(() => {
    const savedProfileData = localStorage.getItem("profileData");
    if (savedProfileData) {
      const { savedUsername, savedBio, savedProfileImage } =
        JSON.parse(savedProfileData);
      setUsername(savedUsername || "");
      setBio(savedBio || "");
      setProfileImage(savedProfileImage || defaultProfileImage);
    }
  }, [defaultProfileImage]);

  // Handle profile picture change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
        setPendingChanges(true); // Mark changes as pending
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle save button
  const handleSave = () => {
    // Save profile data to localStorage
    const profileData = {
      savedUsername: username,
      savedBio: bio,
      savedProfileImage: profileImage,
    };
    localStorage.setItem("profileData", JSON.stringify(profileData));

    // Mark changes as saved
    setPendingChanges(false);

    // Display "Successfully" message
    setSuccessMessage("Successfully saved");

    // Hide the message after 5 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  };

  // Handle clear button to reset default information
  const handleClear = () => {
    if (pendingChanges) {
      // If there are pending changes, reset to saved data
      const savedProfileData = localStorage.getItem("profileData");
      if (savedProfileData) {
        const { savedUsername, savedBio, savedProfileImage } =
          JSON.parse(savedProfileData);
        setUsername(savedUsername || "");
        setBio(savedBio || "");
        setProfileImage(savedProfileImage || defaultProfileImage);
      }
      setPendingChanges(false); // Mark changes as not pending
    } else {
      // If no pending changes, reset to default values
      setUsername("");
      setBio("");
      setProfileImage(defaultProfileImage);
    }
  };

  return (
    <div className="profile-edit">
      {/* Back button from ArtistsWindow to Home Page*/}
      <Link to="/" component={Playlist} className="back-btn">
        <MdNavigateBefore />
      </Link>

      <h1>Edit Profile</h1>
      {/* Form for editing profile */}
      <form className="profile-form">
        {/* Display selected file */}
        <div className="profile-img-container">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-img"
            onClick={() =>
              document.getElementById("profile-image-input").click()
            }
          />
        </div>

        {/* Hidden file input - Change profile picture */}
        <input
          type="file"
          id="profile-image-input"
          className="profile-img-input"
          accept="image/*"
          onChange={handleImageChange}
          hidden={true}
        />

        {/* Username */}
        <input
          type="text"
          className="profile-input"
          placeholder="Username"
          minLength={3}
          maxLength={15}
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Update username state
        />

        {/* About/Bio */}
        <textarea
          className="profile-about"
          placeholder="Bio"
          maxLength={80}
          value={bio}
          onChange={(e) => setBio(e.target.value)} // Update bio state
        />

        {/* Save button */}
        <div className="profile-btn-spacer">
          <button type="button" className="profile-btn" onClick={handleSave}>
            Save
          </button>

          {/* Reset default information button */}
          <button type="button" className="profile-btn" onClick={handleClear}>
            Clear
          </button>
        </div>

        {/* Display "Successfully saved" message */}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
      </form>
    </div>
  );
}
