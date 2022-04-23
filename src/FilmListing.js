import React, { Component } from 'react'
import FilmRow from './FilmRow'
import TMDB from './TMDB'

export default class FilmListing extends Component {

  handleFilterClick(filter){
        console.log(`Setting filter to ${filter}`)
        this.setState({
          filter: this.state.filter
      })
  }

  render() {
    let allFilms= this.props.films.map((film) => {
        console.log(film)
        return <FilmRow film={film} key={film.id} />
      })

      this.state = {
        filter: 'all'
     }
    return (
      <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
    <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms}
</div>
    )
  }
}
