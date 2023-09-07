import React, { useEffect } from "react";
import axios from "axios"; // library
import { AiFillClockCircle } from "react-icons/ai"; // clock icon
import { useStateProvider } from "../../utils/stateProvider";
import { reducerCases } from "../../utils/constants";
import "./OpenedPlaylist.css"; // stylesheet

export default function OpenedPlaylist() {
  // extract values from the result of useStateProvider function
  const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] =
    useStateProvider();

  //the hook will run when any of the dependencies in the array ( [token, dispatch, selectedPlaylistId] ) change
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);
  return (
    <>
      {selectedPlaylist ? (
        <div className="playlist">
          <div className="image">
            <img src={selectedPlaylist.image} alt="selectedplaylist" />
          </div>
          <div className="details">
            <span className="type">Playlist</span>
            <h1 className="title">{selectedPlaylist.name}</h1>
            <p className="description">{selectedPlaylist.description}</p>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
