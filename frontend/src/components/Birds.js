import React, { Component } from 'react'
import ShowBird from './ShowBird'

let baseURL = 'http://localhost:3003/birds'
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
    this.getBirds = this.getData.bind(this)
    this.getBird = this.getBird.bind(this)
  }
  componentDidMount(){
    this.getData()
  }
  async getData(){
      // console.log('inside getbirds');
    let response = await fetch(`${baseURL}`)
    // console.log(response);
    let data = await response.json()
    // console.log(data);
    this.setState({ birds: data })
  }catch(e) {
    console.error(e)
  }

  getBird(bird) {
    console.log(`Bird: `, bird);
    this.setState({bird: bird})
  }


  render() {
    console.log(`this is it`, this.state.bird)
    return(
      <div className="container">
        <h4 className="">Birds</h4>
        {
            this.state.birds.map(bird => {
                return(
                    <div key={bird._id}>
                    <h5 onClick={() => {
                      this.getBird(bird)
                    }}>{bird.name} <span>X</span></h5>
                    </div>
                )

            })
        }
        {this.state.bird
          ? <ShowBird bird={this.state.bird}/>
          : null
        }

      </div>
    )
  }
}
