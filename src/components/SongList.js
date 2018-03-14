import React from 'react'
//import Song from './Song.js'

class SongList extends React.Component {

  constructor(props){
    super(props);

  }

  render() {

    const songList = this.props.songList.map((song) => {
      return <li key={song.id}>
              <h3>{song["im:name"]["label"]}</h3>
              <img src={song["im:image"][2]["label"]} className="song-image"/>
            </li>;
    })

    return <ul>{songList}</ul>
  }
}

export default SongList;
