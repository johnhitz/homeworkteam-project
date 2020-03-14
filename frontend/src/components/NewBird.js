import React, { Component } from 'react'

export default class NewBird extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image: '',
            wikiLink: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })
    }

    async handleSubmit (event) {
        event.preventDefault()
        try {
            let response = await fetch(this.props.baseURL, {
                method: 'POST',
                body: JSON.stringify({ name: this.state.name, image: this.state.image, wikiLink: this.state.wikiLink}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            let data = await response.json()
            this.props.handleAddBird(data)
            this.setState({
                name: '',
                image: '',
                wikiLink: ''
            })
        } catch(error) {
            console.log({'Error': error});
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" value={this.state.name} placeholder="Add a bird name" onChange={this.handleChange} />
                <label htmlFor="image"></label>
                <input type="text" id="image" name="image" value={this.state.image} placeholder="Add a bird image URL" onChange={this.handleChange} />
                <label htmlFor="wikiLink"></label>
                <input type="text" id="wikiLink" name="wikiLink" value={this.state.wikiLink} placeholder="Add the wikiLink" onChange={this.handleChange} />
                <input type="submit" value="Add Bird"/>
            </form>
        )
    }
}
