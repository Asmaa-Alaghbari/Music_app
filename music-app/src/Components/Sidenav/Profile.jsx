// Profile.jsx

import React, { useState, useRef } from "react";
import Modal from "react-modal"; // Modal
import { FaTimes, FaCamera } from "react-icons/fa"; // Close icon and camera icon
import ProfilePicture from "./images/ProfilePicture.png"; // Profile picture

import "./Profile.css"; // Stylesheet

// Modal for modifying profile
Modal.setAppElement("#root");

export default function Profile({ closeSidenav }) {
  // Modal for modifying profile
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Profile picture
  const [selectedFile, setSelectedFile] = useState(null); // Store selected file
  const fileInputRef = useRef(null); // Reference to file input element

  // Profile information
  const [username, setUsername] = useState("Username");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(ProfilePicture);

  // Initial profile information
  const initialUsername = "Username";
  const initialBio = "";
  const initialProfilePicture = ProfilePicture;

  // Modal profile information
  const [modalProfilePicture, setModalProfilePicture] =
    useState(profilePicture);

  // Open Profile Modal
  const openProfileModal = () => {
    setShowProfileModal(true);
    closeSidenav(); // Close the sidenav
  };

  // Close Profile Modal
  const closeProfileModal = () => {
    setShowProfileModal(false);

    // Set input values to current state
    const usernameInput = document.querySelector(".profile-input");
    const bioInput = document.querySelector(".profile-about");
    usernameInput.value = username;
    bioInput.value = bio;

    // Clear selectedFile when closing the modal without saving
    setSelectedFile(null);
  };

  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Handle save button
  const handleSave = () => {
    // Update profile picture if a new file was selected
    let updatedProfilePicture = profilePicture;
    if (selectedFile) {
      updatedProfilePicture = URL.createObjectURL(selectedFile);
    }

    // Update username and bio
    const usernameInput = document.querySelector(".profile-input");
    const bioInput = document.querySelector(".profile-about");
    const updatedUsername = usernameInput.value;
    const updatedBio = bioInput.value;

    // Update profile information
    setModalProfilePicture(updatedProfilePicture);
    setProfilePicture(updatedProfilePicture);
    setUsername(updatedUsername);
    setBio(updatedBio);

    // Clear selectedFile after saving
    setSelectedFile(null);

    // Close modal
    closeProfileModal();
  };

  // Handle clear button
  const handleClear = () => {
    // Clear selectedFile
    setSelectedFile(null);

    // Reset username and bio input values
    const usernameInput = document.querySelector(".profile-input");
    const bioInput = document.querySelector(".profile-about");
    usernameInput.value = initialUsername;
    bioInput.value = initialBio;

    // Reset profile picture
    setModalProfilePicture(initialProfilePicture);
  };

  return (
    <>
      <div className="profile">
        <div className="profile-img-container">
          <img
            src={profilePicture}
            alt="Profile"
            className="profile-img"
            onClick={openProfileModal}
          />
          <span className="edit-profile-text">Edit profile</span>
        </div>
        <h3 className="profile-username">{username}</h3>
        <p className="profile-bio">{bio}</p>
      </div>

      {/* Profile Modal */}
      <Modal
        isOpen={showProfileModal}
        onRequestClose={closeProfileModal}
        className="modal-custom"
      >
        <h2>Edit Profile</h2>
        {/* Close Modal icon */}
        <div className="close-modal-icon" onClick={closeProfileModal}>
          <FaTimes />
        </div>

        {/* Form for editing profile */}
        <form className="profile-modal-form">
          {/* Display selected file */}
          <div
            className="profile-img-modal"
            onClick={() => fileInputRef.current.click()} // Trigger file input click
          >
            <img
              src={
                selectedFile
                  ? URL.createObjectURL(selectedFile)
                  : modalProfilePicture
              }
              alt="Profile"
              className="profile-img"
            />
            {selectedFile && (
              <span className="edit-profile-text-modal">
                <FaCamera />
              </span>
            )}
          </div>

          {/* Hidden file input - Change profile picture */}
          <input
            type="file"
            className="profile-img-input"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
            hidden={true}
          />

          {/* Username */}
          <input
            type="text"
            className="profile-input"
            placeholder="Username"
            minLength={3}
            maxLength={15}
            defaultValue={username}
          />

          {/* About/Bio */}
          <textarea
            className="profile-about"
            placeholder="Bio"
            maxLength={80}
            defaultValue={bio}
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
        </form>
      </Modal>
    </>
  );
}
