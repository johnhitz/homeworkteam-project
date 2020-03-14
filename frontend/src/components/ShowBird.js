import React, { Component } from 'react'


export default class ShowBird extends Component {
  render() {
    return(
      <div className="container">
        <h4 className="">Birds Showbird w/ detail</h4>
        <h5>{this.props.bird.name}</h5>
        <img src={this.props.bird.image} alt={this.props.bird.name}/>

      </div>
    )
  }
}
