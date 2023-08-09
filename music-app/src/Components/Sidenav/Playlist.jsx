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

  // Open Modal for creating new playlist
  function openModal() {
    setModalIsOpen(true);
    closeSidenav(); // Close the sidenav
  }

  // Close Modal for creating new playlist
  function closeModal() {
    setModalIsOpen(false);
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
        <form>
          <img src={AlbumPicture} alt="Album" className="album-img" />
          <div className="modal-form">
            <input type="text" placeholder="Playlist name" />
            <MdPlaylistAdd className="create-new-playlist" />
          </div>
        </form>
      </Modal>
    </div>
  );
}
