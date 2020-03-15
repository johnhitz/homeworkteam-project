import React, { Component } from 'react'


export default class ShowBird extends Component {
  render() {
    return(
      <div className="card">
        <h4>{this.props.bird.name}</h4>
        <img src={this.props.bird.image} alt={this.props.bird.name}/>
      </div>
    )
  }
}
