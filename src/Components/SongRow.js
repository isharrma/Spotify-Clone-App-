import React from "react";

import "./CSS/SongRow.css";
import { useDataLayer } from "./DataLayer";

function SongRow({ track, playSong }) {
  console.log(track);

  const [{item},dispatch] = useDataLayer()
  return (
    <div className="songRow" onClick={() => playSong(item?.id)}>                 
     
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
