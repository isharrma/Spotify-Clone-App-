import React from 'react'

import Header from "./Header.js";
import {useDataLayer} from "./DataLayer";
import SongRow from "./SongRow";

import "./CSS/Body.css"
import  PlayCircleFilled  from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function Body({spotify}) {

  const [{ discover_weekly },dispatch] = useDataLayer();

  const playPlaylist = (id) => {
    spotify.play({
      context_uri: 'spotify:playlist:37i9dQZEVXcDgIvhK73VG4',
    }).then((r) => {
      spotify.getMyCurrentlyPlayingTrack().then((response) =>{
        dispatch({
          type: "SET_ITEM",
          item: response.item,
        });
        dispatch({
          
          type: "SET_PLAYING",
          playing: true,
        });
      })
    })
  }

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  
    return (
      <div className="body">
          <Header spotify={spotify}/>

          <div className="body_info">
            <img src={discover_weekly?.images[0].url} alt=""></img>

            <div className="body_infoText">
              <strong>PLAYLIST</strong>
              <h2>Discover Weekly</h2>
              <p>{discover_weekly?.description} </p>
            </div>
          </div>
          
          <div className="body_songs">
            <div className="body_icons">
              <PlayCircleFilled className="body_shuffle" onClick={playPlaylist}/>
              <FavoriteIcon fontSize="large" className="bodyIcons"/>
              <MoreHorizIcon className="bodyIcons"/>
            </div>

            {discover_weekly?.tracks.items.map((item) => (
            <SongRow  playSong={playSong} track={item} />
        ))}

          </div>
      </div>

    )
}
