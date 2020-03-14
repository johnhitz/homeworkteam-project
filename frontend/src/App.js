import React, { Component } from 'react'
// import ./components/birds.js
// import ./components/NewBirds.js
// import ./components/UpdateBird.js
// import ./components/bird.js

let baseURL = 'http://localhost:3003/birds'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image: '',
            wikiURL: ''
        }
    }

    render() {
        return(
            <div className='container'>
                <h1>Welcome to Bird Watcher</h1>

            </div>
        )
    }
}
