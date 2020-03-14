import React, { Component } from 'react'
import Bird from './Bird'

let baseURL = 'http://localhost:3003/birds'

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
  componentDidMount(){
    this.getBirds()
  }
  async getBirds(){
    let response = await fetch(`${baseURL}`)
    let data = response.json()
    this.setState({birds: data})
  }catch(e) {
    console.error(e)
  }

  render() {
    return(
      <div className="container">
        <h4 className="">Birds</h4>
        {
          this.state.birds.map(bird => {
            return(
              <div>
              <h5>bird name</h5> <button >Show</button>
              </div>
            )
          })
        }

      </div>
    )
  }
}
