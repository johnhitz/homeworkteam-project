import React, { Component } from 'react'
import ShowBird from './ShowBird'

export default class Birds extends Component {
  constructor(props) {
    super(props)
    this.state = {
      birds: [],
      name: '',
      image: '',
      wikiURL: ''
    }
  }
  render() {
    return(
      <div className="container">
        <a href="#">bird name</a>{ " " }<button>Show</button>
        <ShowBird />
      </div>

    )
  }
}
