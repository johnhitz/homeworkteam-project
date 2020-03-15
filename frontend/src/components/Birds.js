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
      description: '',
      order: '',
      family: '',
      genus: '',
      wikiURL: '',
      likes: 0,
      show: true
    }
    this.getBirds = this.getData.bind(this)
    this.getBird = this.getBird.bind(this)
    this.handleAddBird = this.handleAddBird.bind(this)
    this.deleteBird = this.deleteBird.bind(this)
    this.handleEditBird = this.handleEditBird.bind(this)
    this.handleShowBird = this.handleShowBird.bind(this)
    this.handleLikesBird = this.handleLikesBird.bind(this)
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
    this.setState = {
    }
  }
  handleShowBird() {
    console.log('show birds')
    this.setState = {
      show: !this.state.show
    }
  }

  async handleLikesBird(bird, i) {
    console.log("WTF?");
    const newLikes = bird.likes + 1
    try {
      let response = await fetch(`${baseURL}/${bird._id}` , {
        method: 'PUT',
        body: JSON.stringify({
          likes: newLikes
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      this.setState((previousState) => {
        previousState.birds[i].likes++
        return {birds: previousState.birds}
      })
    }catch(error) {
      console.log({'Error': error})
    }
  }


  render() {
    console.log(this.state);
    return(
      <div>
        <h4 className="">Birds</h4>
        <NewBird handleAddBird={this.handleAddBird}
         baseURL={baseURL}/>
        {
            this.state.birds.map((bird, i) => {
                return(
                    <div className="col-sm-6" key={bird._id}>
                      <div className="card bird-card">
                        <h5>{bird.name}</h5>
                        <h6>Likes: {bird.likes}</h6>
                        <div className="btn-group col-sm-4" role="group">
                          <button
                            type="button"
                            className="btn
                            btn-success"
                            onClick={() => {
                              this.getBird(bird) }}
                            >Show</button>
                          <button type="button" className="btn btn-primary" onClick={() => {
                          this.handleLikesBird(bird, i)
                        }}>Like</button>
                        <button className="btn btn-secondary"
                          onClick={() => { this.deleteBird(bird._id)
                        }}>
                            X
                        </button>
                        </div>
                      </div>
                    </div>
                )

            })
        }
        {this.state.bird && this.state.show
          ? <ShowBird
            bird={this.state.bird }
            showBird={this.handleShowBird}
            />
          : null
        }

      </div>
    )
  }
}
