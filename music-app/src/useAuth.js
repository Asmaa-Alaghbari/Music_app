// here we are going to store the access token, the refresh token and the expires in

import { useState, useEffect } from "react";
import axios from "axios";

export default function useAuth(code) {
  //these are the informations that we need
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  //we will use useEfeect to get the informations
  useEffect(() => {
    axios
      .post("http://localhost:3000/login", {
        code,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, [code]);
}
