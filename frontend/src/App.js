import React, { Component } from 'react'
import Birds from './components/Birds.js'
// import ./components/NewBirds.js
// import ./components/UpdateBird.js
// import ./components/bird.js



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
                <Birds />
            </div>
        )
    }
}
