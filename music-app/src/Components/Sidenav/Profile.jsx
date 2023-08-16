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

  const [selectedFile, setSelectedFile] = useState(null); // Store selected file
  const fileInputRef = useRef(null); // Reference to file input element

  // Open Profile Modal
  const openProfileModal = () => {
    setShowProfileModal(true);
    closeSidenav(); // Close the sidenav
  };

  // Close Profile Modal
  const closeProfileModal = () => {
    setShowProfileModal(false);
    setSelectedFile(null); // Clear selected file when closing modal
  };

  // Handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <>
      <div className="profile">
        <div className="profile-img-container" onClick={openProfileModal}>
          <img src={ProfilePicture} alt="Profile" className="profile-img" />
          <span className="edit-profile-text">Edit profile</span>
        </div>
        <h3 className="profile-username">Username</h3>
        <p className="profile-bio">Bio</p>
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
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="Profile"
              className="profile-img"
            />
          ) : (
            <div
              className="profile-img-container"
              onClick={() => fileInputRef.current.click()} // Trigger file input click
            >
              <img src={ProfilePicture} alt="Profile" className="profile-img" />
              <span className="edit-profile-text-modal">
                <FaCamera />
              </span>
            </div>
          )}

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
            maxLength={15}
          />

          {/* About/Bio */}
          <textarea
            className="profile-about"
            placeholder="Bio"
            maxLength={80}
          />
          <button className="profile-save-btn">Save</button>
        </form>
      </Modal>
    </>
  );
}


// I want to when I update somthing in the profile modal, it will update the profile in the sidenav 