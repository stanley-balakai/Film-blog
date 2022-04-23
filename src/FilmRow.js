import React, { Component } from 'react'
import Fave from './Fave'
import FilmPoster from './FilmPoster'

export default class FilmRow extends Component {

  handleDetailsClick(film){
    console.log("Fetching details for " + film)
  }

  render() {
    
    return (
        <div className="film-row" onClick={()=> this.handleDetailsClick(this.props.film.title)}>
        <FilmPoster url={`https://image.tmdb.org/t/p/w780${this.props.film.poster_path}`}/>
      
        <div className="film-summary">
          <Fave />
          <h1>{this.props.film.title}</h1>
          <p>{new Date(this.props.film.release_date).getFullYear()}</p>
        </div>
      </div>
    )
}
}

