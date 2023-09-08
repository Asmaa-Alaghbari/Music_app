import React, { useEffect } from "react";
import { reducerCases } from "../../utils/constants";
import { useStateProvider } from "../../utils/stateProvider";
import { AiFillPlayCircle } from "react-icons/ai"; //play button icon
import { PiMusicNotesFill } from "react-icons/pi"; //music note icon
import "./HomePlaylist.css"; // stylesheet

export default function CardPlaylist() {
  const [{ token, playlists }, dispatch] = useStateProvider();

  useEffect(() => {
    //user-id = 21t6dnvsd6j6j3dsqu5dpxhmq
    const url =
      "https://api.spotify.com/v1/users/21t6dnvsd6j6j3dsqu5dpxhmq/playlists";

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Handle the data here
        const playlistArray = [data];
        console.log(playlistArray[0].items);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, [token, dispatch]);

  return (
    <div className="cardPlaylist">
      <ul>
        {playlists ? (
          playlists.map(({ name }) => <li>{name}</li>)
        ) : (
          <li>Loading playlists...</li>
        )}
      </ul>
         
    </div>
  );
}
