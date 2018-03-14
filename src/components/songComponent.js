import React from 'react'

const songComponent = (props) => {
  console.log(props.song.id);
  return <li>
          <h3>{props.song["im:name"]["label"]}</h3>
          <img src={props.song["im:image"][2]["label"]} className="song-image"/>
        </li>
};


export default songComponent;
