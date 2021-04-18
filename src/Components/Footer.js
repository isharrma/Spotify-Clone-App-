import React,{useEffect} from 'react'


import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import {  Slider } from "@material-ui/core";

import { useDataLayer } from "./DataLayer"

import "./CSS/Footer.css"

export default function Footer({spotify}) {

    const [ {token, item, playing},dispatch] = useDataLayer();

    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((r) => {
          console.log(r);
    
          dispatch({
            type: "SET_PLAYING",
            playing: r.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
        });
      }, [spotify]);
    
      const handlePlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
      };

    const skipNext = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlaybackState((response) => {
            dispatch({
                type: "SET_ITEM",
                item: response.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });

    }

    const skipPrevious = () =>{
        spotify.skipToPrevious();
        spotify.getMyCurrentPlaybackState((response) => {
            dispatch({
                type: "SET_ITEM",
                item: response.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });

    }
    return (
        <div className="footer">
            <div className="footer-left">
                <img src={item?.album.images[0].url} alt={item?.name} className="album_logo"></img>
                {
                    item ? (
                        <div className="song_info">
                            <h6>{item.name}</h6>
                            <p>{item.artists.map((artist)=>artist.name).join(", ")}</p>
                        </div>
                    ) : (
                        <div className="song_info">
                            <h6>No Song Playing</h6>
                            <p>...</p>
                        </div>
                    )
                }
                
            </div>
            <div className="footer-center">
                <ShuffleIcon className="footer_icon" />
                <SkipPreviousIcon className="footer_icon" onClick={skipPrevious}/>
                {playing ? (
          <PauseCircleFilledIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer_icon"
          />
        ) : (
          <PlayCircleFilledIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer_icon"
          />
        )}
                
                <SkipNextIcon className="footer_icon" onClick={skipNext} />
                <RepeatIcon className="footer_icon "/>
            </div>
            <div className="right">
            <PlaylistPlayIcon />
            <VolumeDownIcon />
            <Slider  className="music_slider" aria-labelledby="continuous-slider"  style={{color:'#E0E0E0'}}/>
            
            </div>

        </div>
    );
}
