import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Album from '../src/components/Album'
import Albums from '../src/components/Albums'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // artist: 'A.R.Rahman',
      // album: 'Rockstar',

      //created array of objects for the albums data
      albums: [{
        id: 1,
        aritst: 'Taylor Swift',
        album_title: 'willow',
        songs: 'willow' 
      },
      {
        id: 2,
        aritst: 'Shawn Mendes',
        album_title: 'Monster',
        songs: 'Monster' 
      }]
      // img: '../images/rockstar-forProject.png'
    }
  }

  render() {
  return (
    <div className="App">
      {/* Hello, World! */}
      <Album artist={this.state.artist} album={this.state.album} img={this.state.img} />

      {/*sending array of objects data as props to Albums component*/}
      <Albums albums={this.state.albums}/> 
    </div>
  );
  }
}

export default App;
