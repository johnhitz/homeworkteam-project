import React, { Component } from 'react'


export default class ShowBird extends Component {
  render() {
    return(
      <div className="card show">
        <img className="card-img-top" src={this.props.bird.image} alt={this.props.bird.name}/>
        <div class="card-body">
          <h4 className="card-title">{this.props.bird.name}</h4>
          <h5>Order: {this.props.bird.order}</h5>
          <h5>Family: {this.props.bird.family}</h5>
          <h5>Genus: {this.props.bird.genus}</h5>
          <p className="card-text">{this.props.bird.description}</p>
        </div>
        <button onClick={() => {
          this.props.HideBird(this.props.show)
        }}>Close</button>
      </div>
    )
  }
}
