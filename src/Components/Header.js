import React from 'react'

import { useDataLayer } from "./DataLayer"

import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./CSS/Header.css"


function Header({spotify}) {

  const [{ user },dispatch ] = useDataLayer()
    return (
        <div className="header">
            <div className="header-left">
            <SearchIcon style={{color:"black"}}/>
        <input className="input"
          placeholder="Search"
          type="text"
        />
            </div>
            <div className="header-right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
            
        </div>
    )
}

export default Header
