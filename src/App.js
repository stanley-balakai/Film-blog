import React, { Component } from 'react';
import './App.css';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';

class App extends Component {

constructor(props) {
  super(props)

  this.handleFaveToggle = this.handleFaveToggle.bind(this)

  this.state = {
     films: `${TMDB.films}`,
     faves: [],
     current: {}
     

  }
}

handleFaveToggle(film) {
  const faves = this.faves.slice
  const filmIndex = 
}

  render() {
    return (
      <div className="App" >
        <div className="film-library">
          <FilmListing films={this.state.films} faves={this.state.faves} />
          <FilmDetails current={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
