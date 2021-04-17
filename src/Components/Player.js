import React from 'react'

import SideBar from "./SideBar"
import Footer from "./Footer"
import Body from "./Body"

import "./CSS/Player.css"



export default function Player( {spotify}) {
    return (
       <div className="player">
           <div className="player_body">
                  <SideBar />
                  <Body />
           </div>

            <Footer />
       </div>
    )
}
