import React from 'react'
import SongComponent from './songComponent.js'

class SongList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const songList = this.props.songList.map((song) => {
      return <SongComponent key={song.id} song={song} />;
    })

    return <ul>{songList}</ul>
  }
}

export default SongList;
