// MusicApp.jsx is not a Component

import React from "react";

export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"; //redirect to the authorize page on spotify
const CLIENT_ID = "90d4e9715f2546dcad787999a5217334"; // Maria's client id from spotify account
const REDIRECT_URI = "http://localhost:3000/"; // redirect to our localhost

// this are the thnigs you cand access from the API
const scope = [
  "userread-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state,",
  "user-top-read",
];

// get the access token from the loginUrl
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1) // first substring before the '&'
    .split("&")
    .reduce((initial, item) => {
      // first word after '='
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// this is a URL created with the CLIENT_ID, REDIRECT_URL, scope and token
export const loginURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;
