import React from 'react'


import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

import "./CSS/Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-left">
                <img src="" alt="" className="album_logo"></img>
                <div className="song_info">
                    <h6>SAD!</h6>
                    <p>XXXTENTANCION </p>
                </div>
            </div>
            <div className="footer-center">
                <ShuffleIcon className="footer_icon" />
                <SkipPreviousIcon className="footer_icon" />
                < PlayCircleFilledIcon fontSize="large" className="footer_icon" />
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_icon "/>
            </div>
            <div className="right">
            <PlaylistPlayIcon />
            <VolumeDownIcon />
            <Slider  className="music_slider" aria-labelledby="continuous-slider"  style={{color:'#E0E0E0'}}/>
            
            </div>

        </div>
    )
}
