import React from 'react'
//import SongList from '../components/SongList.js'

class SongBox extends React.Component {


  constructor(props){
    super(props);
    this.state = {
      url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json",
      limit: 20,
      songLlist: []
    }

    this.handleRequestGetSongList = this.handleRequestGetSongList.bind(this);
  }


  render(){
    return (<div>
            <label htmlFor="song-count-limit">Limit of songs </label>
            <input type="number" id="song-count-limit"/>
            <button onClick="handleRequestGetSongList">GET SONGS</button>
          </div>);

  }

  handleRequestGetSongList(){
    const request = new XMLHttpRequest();
    request.open("GET", this.state.url);
    request.addEventListener("load", () => {
      let jsonSongList = JSON.parse(this.request.responseText);
      this.setState({songList: jsonSongList.feed.entry})
    })
    request.send();
  }

}

export default SongBox;
