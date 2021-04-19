import React, {useEffect} from 'react'
import SpotifyWebApi from "spotify-web-api-js";

import  Login from "./Components/Login.js" 
import  Player from "./Components/Player"
import { getTokenFromURL } from "./Components/spotify"
 import { useDataLayer } from "./Components/DataLayer" 

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";




const spotify = new SpotifyWebApi();

function App() {
  const [{  token  },dispatch] = useDataLayer();  // Using the Context API for state management

  // Load the page according to the token
  useEffect( ()=>{

    const hash =  getTokenFromURL();

    window.location.hash = "";  //Setting the URL to empty to keep the token hidden
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({                          //Setting token 
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getPlaylist("37i9dQZEVXcDgIvhK73VG4").then((response) =>       //Setting Discover Weekly
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );

      spotify.getMyTopArtists().then((response) =>         //Setting top artist
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );

      dispatch({                                     //Setting your spotify information
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

      spotify.getMe().then((user) => {           //Setting user
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [token, dispatch]);


  return (
    <div className="app">

      {/* Conditinal Rendering */}

      {
        token ? (
          <Player spotify={spotify}/>
        ):(
          <Login />
        )
      }
    </div>
  );
}

export default App;