// App.js is the main file of the project

import React, { useEffect, useState } from "react";
import { reducerCases } from "./utils/constants";
import { useStateProvider } from "./utils/stateProvider";
import Login from "./Components/Login/Login"; // Login components
import Dashboard from "./Dashboard"; // Dashboard file

import "./App.css";

function App() {
  const [{ token }, dispatch] = useStateProvider();

  // get the access token from the loginUrl
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return <div>{token ? <Dashboard /> : <Login />}</div>;
}

export default App;
