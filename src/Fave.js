import React, { Component } from 'react'

export default class Fave extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           
        }
      }


    handleClick = (e) => {
        console.log("handling fave click!!")
        e.stopPropagation()
        this.props.onFaveToggle()
    }

  render() {

    const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
    const newClass = `film-row-fave ${isFave}`
    return (
        <div className={newClass} onClick={(e) => this.handleClick(e)}>
        <p className="material-icons">{isFave}</p>
      </div>
    )
  }
}
