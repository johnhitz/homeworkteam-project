import React, { Component } from 'react'
// import Bird from './Bird'

let baseURL = 'http://localhost:3003/birds'
let stupid = ['ric', 'john']
export default class Birds extends Component {
  constructor(props) {
    super(props)
    this.state = {
      birds: [],
      bird: null,
      name: '',
      image: '',
      wikiURL: ''
    }
    this.getBirds = this.getBirds.bind(this)
  }
  componentDidMount(){
    this.getBirds()
  }
  async getBirds(){
      console.log('inside getbirds');
    let response = await fetch(`${baseURL}`)
    console.log(response);
    let data = await response.json()
    console.log(data);
    this.setState({ birds: data })
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
                    <h5>{bird.name}</h5>
                )
            })
        }

      </div>
    )
  }
}
