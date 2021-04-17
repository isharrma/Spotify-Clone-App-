import React from 'react'

import SideBarOption from "./SideBarOption"

import HomeSharpIcon  from '@material-ui/icons/HomeSharp';
import SearchSharpIcon   from '@material-ui/icons/SearchSharp';
import LibraryMusicSharpIcon  from '@material-ui/icons/LibraryMusicSharp';

import "./CSS/SideBar.css"



export default function SideBar() {
    return (
        <div className="sidebar">
             <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
             alt="" className="sidebar_logo" />

             <SideBarOption  Icon={ HomeSharpIcon } title="Home" />
             <SideBarOption  Icon={ SearchSharpIcon } title="Search" />
             <SideBarOption Icon={ LibraryMusicSharpIcon } title="Your Library" />

             <br />
             <strong className="sidebar_title">PLAYLISTS</strong>

             <hr className="hr" />

        </div>
           
    )
}
