import React, {useEffect, useState} from 'react'
import SpotifyWebApi from "spotify-web-api-js";

import  Login from "./Components/Login.js" 
import  Player from "./Components/Player"
import { getTokenFromURL } from "./Components/spotify"
 import { useDataLayer } from "./Components/DataLayer" 

import {Container} from "reactstrap"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";



const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token },dispatch] = useDataLayer();  // Using the Context API for state management

  // Load the page according to the token
  useEffect( ()=>{

    const hash = getTokenFromURL();

    window.location.hash = "";  //Setting the URL to empty to keep the token hidden
    const _token = hash.access_token;

    if(_token){

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then( user =>{

        dispatch({
          type: 'SET_USER',
          user: user,
        });

      });
    }
 

  },[])


  return (
    <Container fluid className="app">

      {/* Conditinal Rendering */}

      {
        token ? (
          <Player spotify={spotify}/>
        ):(
          <Login />
        )
      }
    </Container>

  );
}

export default App;