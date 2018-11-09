import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
document.body.style = 'background: grey;';
let defaultStyle={
  color: '#fff'
}
let fakeServerdata={
  user:{
    name:'Furkan',
    Playlists:[
      {
        name:'Favorilerim',
        songs:[
          {name:'Friends  ',duration:1345},
          {name:'Ciao Adios  ',duration:9000},
          {name:'Only Girl  ',duration:2222}
        ]
          
      },
      {
        name:'Yıllık Keşif',
        songs:[
          {name:'Friends  ',duration:1345},
          {name:'Ciao Adios  ',duration:9000},
          {name:'Only Girl  ',duration:2222}
        ]  
      },
      {
        name:'Haftalık Keşif',
        songs:[
          {name:'Friends  ',duration:1345},
          {name:'Ciao Adios  ',duration:9000},
          {name:'Only Girl  ',duration:2222}
        ]
         },
      {
        name:'Aylık Keşif',
        songs:[
          {name:'Friends  ',duration:1345},
          {name:'Ciao Adios  ',duration:9000},
          {name:'Only Girl  ',duration:2222}
        ]
      }
    ]
  }
}
class Playlistcounter extends Component{
  render(){
    
    return(
      <div style={{...defaultStyle ,width:"40%", display:'inline-block'}}>
        <h2>{this.props.Playlists.length} Playlists</h2>
      </div>
    );
  }
}
class HoursCounter extends Component{
  render(){
    let allSongs = this.props.Playlists.reduce((songs,eachPlaylists)=> {
      return songs.concat(eachPlaylists.songs)
     },[] )
    let totalDuration = allSongs.reduce((sum,eachSong)=> {
      return sum + eachSong.duration
    },0)

    
    return(
      <div style={{...defaultStyle ,width:"40%", display:'inline-block'}}>
        <h2>{totalDuration} Hours</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render()
  {
    return(
      <div style={{defaultStyle}}>
       <img/>
       <input type="text"/>
       
      </div>
    )
  }
}
class Playlist extends Component{
  render()
  {
    return (<div style={{...defaultStyle,display:'inline-block',width:"25%"}}>
      <img/>
      <h3>{this.props.name}</h3>
      <ul><li>Song 1</li><li>Song 2</li>
      <li>Song 3</li><li>Song 3</li></ul>
      </div>
    );
  }
   
}

class App extends Component {
  constructor(){
    super();
    this.state=({serverData:{}})
  }
  componentDidMount(){
    setTimeout(()=> {
      this.setState({serverData:fakeServerdata});
    },1000);
  }
  
  render() {

    console.log("this.state.serverData", this.state.serverData);
    return (
      <div className="App">
        {
          this.state.serverData.user ? (
            <div>
              <h1 style={{...defaultStyle,'font-size':'54px'}}>
              {this.state.serverData.user.name}'s Playlists
              </h1>
              <Playlistcounter Playlists={this.state.serverData.user.Playlists}></Playlistcounter>
              <HoursCounter Playlists={this.state.serverData.user.Playlists}></HoursCounter>
              <Filter></Filter>
              {
                this.state.serverData.user.Playlists.map(playlist => (
                  <Playlist name={playlist.name}/>
                ))
              }
            </div>
          ) : (
            <h1 style={{...defaultStyle}}>Loading...</h1>
          )
        }
      </div>
    );
  }
}

export default App;
