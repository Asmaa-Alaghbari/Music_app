import "./Login.css"; // stylesheet

export default function Login() {
  //redirect to the authorize page on spotify
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";

  // Maria's client id from spotify account
  const CLIENT_ID = "90d4e9715f2546dcad787999a5217334";

  // redirect to our localhost
  const REDIRECT_URI = "http://localhost:3000/";

  // this is a URL created with the AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URL, code
  const loginURL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&show_dialog=true`;

  // this are the thnigs you can access from the API
  const scope = [
    "user-read-playback-state",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
  ];

  return (
    <div>
      <div className="login">
        <h1 className="login-title">Music App</h1>
        <hr className="line" />
        <div className="slide-container">
          <a href={loginURL} className="login-link">
            Login With Spotify
          </a>
        </div>
      </div>
    </div>
  );
}
