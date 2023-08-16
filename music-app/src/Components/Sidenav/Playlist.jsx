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
  const [createNewAlbumModalIsOpen, setCreateNewAlbumModalIsOpen] =
    useState(false);

  // Playlist state for creating new playlist
  const [playlists, setPlaylists] = useState([]);

  // Track new playlist name input
  const [newPlaylistName, setNewPlaylistName] = useState("");

  // Track error message for existing playlist name
  const [errorMessage, setErrorMessage] = useState("");

  // Track the index of the last newly added playlist
  const [lastNewPlaylistIndex, setLastNewPlaylistIndex] = useState(-1);

  // Open Modal for creating new playlist
  function openCreateNewAlbumModal() {
    setCreateNewAlbumModalIsOpen(true);
    closeSidenav(); // Close the sidenav
  }

  // Close Modal for creating new playlist
  function closeCreateNewAlbumModal() {
    setCreateNewAlbumModalIsOpen(false);
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

    // Check if trimmedPlaylistName matches any existing playlist name after trimming
    const nameExists = playlists.some(
      (playlist) => playlist.trim() === trimmedPlaylistName
    );

    if (
      trimmedPlaylistName !== "" &&
      !nameExists &&
      !existingPlaylists.includes(trimmedPlaylistName)
    ) {
      const updatedPlaylists = [newPlaylistName, ...playlists];
      setPlaylists(updatedPlaylists);
      setNewPlaylistName("");
      setErrorMessage(""); // Clear error message on successful submission
      setLastNewPlaylistIndex(0); // Set the index of the last newly added playlist
    } else {
      // Set error message if playlist already exists
      setErrorMessage("Playlist already exists");
    }
  }

  return (
    <div className="playlist">
      <h3 className="playlist-lists">Playlist</h3>
      <ul>
        <li onClick={openCreateNewAlbumModal}>
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

        {/* Display only the last 5 added playlists */}
        {playlists.slice(0, 5).map((playlist, index) => (
          <li key={index}>
            <GiMusicalNotes className="icons-style" />
            <span className="playlist-lists">
              {/* Display new label for the last newly added playlist */}
              {playlist}
              {index === lastNewPlaylistIndex && (
                <span className="new-label">New</span>
              )}
            </span>
          </li>
        ))}

        {/* Show all playlists */}
        <p className="more-playlists">Show All</p>
      </ul>

      {/* Modal for creating new playlist */}
      <Modal
        isOpen={createNewAlbumModalIsOpen}
        onRequestClose={closeCreateNewAlbumModal}
        className="modal-custom"
      >
        <h2>Create new playlist</h2>
        {/* Close Modal icon  */}
        <div className="close-modal-icon" onClick={closeCreateNewAlbumModal}>
          <FaTimes />
        </div>
        {/* Form for creating new playlist */}
        <form onSubmit={handleCreatePlaylist}>
          <img src={AlbumPicture} alt="Album" className="album-img" />
          <div className="modal-form">
            <input
              className="playlist-input"
              type="text"
              placeholder="New Playlist Name"
              maxLength={20}
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
          <h5>Recent Added Playlist: </h5>
          {/* Display only last 3 added playlists */}
          {playlists.slice(0, 3).map((playlist, index) => (
            <div className="added-playlist-list" key={index}>
              {playlist}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
