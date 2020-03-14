import React, { Component } from 'react'
import ShowBird from './ShowBird'
import NewBird from './NewBird'

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
    this.handleAddBird = this.handleAddBird.bind(this)
    this.deleteBird = this.deleteBird.bind(this)
    this.handleEditBird = this.handleEditBird.bind(this)
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

  handleAddBird(bird) {
      const copyBirds = [bird, ...this.state.birds]
      this.setState({
          birds: copyBirds
      })
  }

  async deleteBird(id) {
      try {
          let response = await fetch(`${baseURL}/${id}`, {
              method: 'DELETE'
          })
          let data = await response.json()
          const foundBird = this.state.birds.findIndex(bird => bird._id === id)
          const copyBirds = [...this.state.birds]
          copyBirds.splice(foundBird, 1)
          this.setState({birds: copyBirds})
      } catch (error) {
          console.error(error);
      }
  }

  handleEditBird(bird) {

  }


  render() {
    console.log(`this is it`, this.state.bird)
    return(
      <div>
        <h4 className="">Birds</h4>
        <NewBird handleAddBird={this.handleAddBird} baseURL={baseURL}/>
        {
            this.state.birds.map(bird => {
                return(
                    <div key={bird._id}>
                    <h5 onClick={() => {
                      this.getBird(bird) }}>
                        {bird.name}
                        <span onClick={() => { this.deleteBird(bird._id)}}>
                            X
                        </span>
                    </h5>
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
