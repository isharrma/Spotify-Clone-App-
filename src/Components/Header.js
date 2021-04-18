import React from 'react'

import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import { Avatar } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import "./CSS/Header.css"

function Header({spotify}) {
    return (
        <div className="header">
            <div className="header-left">
            <TextField className="search_box" placeholder=" Search" id="input-with-icon-textfield" InputProps={{
            startAdornment: (
            <InputAdornment position="start" >
              <SearchIcon style={{color:"#E0E0E0"}} />
            </InputAdornment>
          ),
        }}
        
      />

            </div>
            <div className="header-right">
                <Avatar src="" alt="AS"/>
                <h4>Aman Sharma</h4>
            </div>
            
        </div>
    )
}

export default Header
