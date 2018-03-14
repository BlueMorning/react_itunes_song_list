import React from 'react'
import SongList from '../components/SongList.js'

class SongBox extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      limit: 20,
      songList: []
    }

    this.state.url = `https://itunes.apple.com/gb/rss/topsongs/limit=${this.state.limit}/json`,
    this.handleRequestGetSongList = this.handleRequestGetSongList.bind(this);


    this.handleLimitChange = this.handleLimitChange.bind(this);
  }


  render(){
    return (<div className="flex-box-column">
              <div className="flex-box-row">
                <input type="number" id="song-count-limit" value={this.state.limit} onChange={this.handleLimitChange} placeholder="Set the limit of songs"/>
                <button onClick={this.handleRequestGetSongList}>GET SONGS</button>
              </div>
              <div>
                <SongList songList={this.state.songList}/>
              </div>
            </div>
          );

  }

  handleLimitChange(event){
    this.setState({limit: event.target.value});
  }

  handleRequestGetSongList(){
    this.state.url = `https://itunes.apple.com/gb/rss/topsongs/limit=${this.state.limit}/json`;
    const request = new XMLHttpRequest();
    request.open("GET", this.state.url);
    request.addEventListener("load", () => {

      let songList = JSON.parse(request.responseText).feed.entry;

      if(Array.isArray(songList)){
        let key = 0;
        songList.forEach((song) => {
          song.id = key;
          key++;
        })
      }

      this.setState({songList: songList});

    })
    request.send();
  }

}

export default SongBox;
