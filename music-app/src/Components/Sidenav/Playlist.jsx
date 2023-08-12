// Playlist.jsx

import React, { useState } from "react";
import Modal from "react-modal"; // Modal
import { MdPlaylistAdd } from "react-icons/md"; // Playlist icon
import { GiMusicalNotes } from "react-icons/gi"; // Music note icon
import { AiOutlineHeart } from "react-icons/ai"; // Heart icon
import { FaTimes } from "react-icons/fa"; // Close icon
import AlbumPicture from "./images/AlbumPicture.png"; // Album picture
import "./Playlist.css"; // Stylesheet

// Modal for creating new playlist
Modal.setAppElement("#root");

export default function Playlist({ closeSidenav }) {
  // Modal for creating new playlist
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Playlist state for creating new playlist
  const [playlists, setPlaylists] = useState([]);

  // Track new playlist name input
  const [newPlaylistName, setNewPlaylistName] = useState("");

  // Track error message for existing playlist name
  const [errorMessage, setErrorMessage] = useState(""); // Track error message

  // Open Modal for creating new playlist
  function openModal() {
    setModalIsOpen(true);
    closeSidenav(); // Close the sidenav
  }

  // Close Modal for creating new playlist
  function closeModal() {
    setModalIsOpen(false);
    setNewPlaylistName(""); // Clear input field on closing modal
    setErrorMessage(""); // Clear error message on closing modal
  }

  // Handle form submission and add new playlist
  function handleCreatePlaylist(event) {
    event.preventDefault();

    // Existing playlists
    const existingPlaylists = ["Favourite", "Inspirational", "Hits", "Top 100"];

    // Trim the input playlist name to remove leading and trailing spaces
    const trimmedPlaylistName = newPlaylistName.trim();

    if (
      trimmedPlaylistName !== "" &&
      !playlists.includes(trimmedPlaylistName) &&
      !existingPlaylists.includes(trimmedPlaylistName)
    ) {
      setPlaylists([...playlists, newPlaylistName]);
      setNewPlaylistName("");
      setErrorMessage(""); // Clear error message on successful submission
    } else {
      // Set error message if playlist already exists
      setErrorMessage("Playlist already exists");
    }
  }

  return (
    <div className="playlist">
      <h3 className="playlist-lists">Playlist</h3>
      <ul>
        <li onClick={openModal}>
          <MdPlaylistAdd className="icons-style" />
          <span className="playlist-lists">Create new</span>
        </li>
        <li>
          <AiOutlineHeart className="icons-style" />
          <span className="playlist-lists">Favourite</span>
        </li>
        <li>
          <GiMusicalNotes className="icons-style" />
          <span className="playlist-lists">Inspirational</span>
        </li>
        <li>
          <GiMusicalNotes className="icons-style" />
          <span className="playlist-lists">Hits</span>
        </li>
        <li>
          <GiMusicalNotes className="icons-style" />
          <span className="playlist-lists">Top 100</span>
        </li>

        {/* Display added playlists */}
        {playlists.map((playlist, index) => (
          <li key={index}>
            <GiMusicalNotes className="icons-style" />
            <span className="playlist-lists">{playlist}</span>
          </li>
        ))}
      </ul>

      {/* Modal for creating new playlist */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal-custom"
      >
        <h2>Create new playlist</h2>
        <div className="close-modal-icon" onClick={closeModal}>
          <FaTimes />
        </div>
        <form onSubmit={handleCreatePlaylist}>
          <img src={AlbumPicture} alt="Album" className="album-img" />
          <div className="modal-form">
            <input
              className="playlist-input"
              type="text"
              placeholder="New Playlist Name"
              value={newPlaylistName}
              onChange={(e) => setNewPlaylistName(e.target.value)}
            />
            <button
              disabled={!newPlaylistName}
              type="submit"
              className="create-new-playlist"
            >
              <MdPlaylistAdd />
            </button>
          </div>

          {/* Display error message */}
          <div className="error-msg">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </form>

        {/* Display added playlists in the Modal */}
        <div className="added-playlist-modal">
          <h5>Added Playlist: </h5>
          {playlists.map((playlist, index) => (
            <div className="added-playlist-list" key={index}>
              {playlist}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
