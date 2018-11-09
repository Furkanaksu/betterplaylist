import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
document.body.style = 'background: grey;';
let defaultStyle={
  color: '#fff'
}
let fakeServerdata={
  user:{
    name:'Furkan'
  }
}
class   Aggregate extends Component{
  render(){
    
    return(
      <div style={{...defaultStyle ,width:"40%", display:'inline-block'}}>
        <h2>Number and Text</h2>
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
  
  render() {
    return (
      <div className="App">
        <h1 style={{...defaultStyle,'fontSize':'54px'}}>{fakeServerdata.user.name}'s Playlists</h1>
        <Aggregate></Aggregate>
        <Aggregate></Aggregate>
        <Filter></Filter>
        <Playlist></Playlist>
        <Playlist></Playlist>
        <Playlist></Playlist>
        <Playlist></Playlist>
        

        
        

      </div>
    );
  }
}

export default App;
