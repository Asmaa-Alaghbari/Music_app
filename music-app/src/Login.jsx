import React from "react";
import { Link } from "react-router-dom"; // use to open Playlists Window page
import "./Login.css"; // stylesheet
import { loginURL, AUTH_ENDPOINT } from "./MusicApp";

export default function Login() {
  return (
    <div>
      <div className="login">
        <h1 className="login-title">Music App</h1>
        <hr className="line" />
        <div className="slide-container">
          <Link to={loginURL} component={loginURL} className="login-link">
            LOGIN WITH SPOTIFY
          </Link>
        </div>
      </div>
    </div>
  );
}
