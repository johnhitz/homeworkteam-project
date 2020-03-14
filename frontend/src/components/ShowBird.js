import React, { Component } from 'react'
import Bird from './Bird'

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
        <h4 className="">Birds Showbird w/ detail</h4>
        name
        image
        wiki
        url
      </div>
    )
  }
}
