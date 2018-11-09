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
        sarki:['Friends  ','The song','Anne Marie']
      },
      {
        name:'Haftalık Keşif',
        sarki:['Manzara','The song','Hande Yener']  
      },
      {
        name:'Haftalık Keşif',
        sarki:['Manzara','The song','Hande Yener']
         },
      {
        name:'Haftalık Keşif',
        sarki:['Manzara','The song','Hande Yener']
      }
    ]
  }
}
class   Aggregate extends Component{
  render(){
    
    return(
      <div style={{...defaultStyle ,width:"40%", display:'inline-block'}}>
        <h2>{this.props.Playlists && this.props.Playlists.length} Text</h2>
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
      <h3>Playlist Name</h3>
      <ul><li>Song 1</li><li>Song 2</li>
      <li>Song 3</li><li>Song 3</li></ul>
      </div>
    )
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
    return (
      <div className="App">
      {this.state.serverData.user ?
      <div>
            <h1 style={{...defaultStyle,'font-size':'54px'}}>
            {this.state.serverData.user.name}'s Playlists
            </h1>
         
        
        <Playlistcounter Playlists={this.state.serverData.user.Playlists}></Playlistcounter>
              
        <HoursCounter Playlists={this.state.serverData.user.Playlists}></HoursCounter>
        
      
        <Filter></Filter>
        <Playlist></Playlist>
        <Playlist></Playlist>
        <Playlist></Playlist>
        <Playlist></Playlist>
        </div>:<h1 style={{...defaultStyle}}>Loading...</h1>
      }
        </div>
      
    );
  }
}

export default App;
