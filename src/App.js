import React, {useEffect, useState} from 'react'
import SpotifyWebApi from "spotify-web-api-js";


import  Login from "./Components/Login.js" 
import  Player from "./Components/Player"
import { getTokenFromURL } from "./Components/spotify"

import {Container ,Col,Row } from "reactstrap"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


const spotify = new SpotifyWebApi();

function App() {
  const [token,setToken] = useState(null);   // state for storing the token from Spotify

  // Load the page according to the token
  useEffect( ()=>{

    const hash = getTokenFromURL();

    window.location.hash = "";
    const _token = hash.access_token;

    if(_token){
      setToken(_token);
      spotify.setAccessToken(_token);

      spotify.getMe().then( user =>{
        console.log("User is >>",user );
      })
    }

    

    console.log("I have a token 👉",token);
  },[])

  return (
    <Container fluid>

      {/* Conditinal Rendering */}
      {
        token ? (
          <Player />
        ):(
          <Login />
        )
      }
    </Container>

  );
}

export default App;