import React, { Component } from 'react'

export default class EditBird extends Component {
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
            this.props.handleUpdateBird(data)
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
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input className="form-control" type="text" id="name" name="name" value={this.state.name}
                  onChange={this.handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="image"></label>
                <input className="form-control" type="text" id="image" name="image" value={this.state.image}
                onChange={this.handleChange} />
                </div>
                <div className="form-group">
                <label htmlFor="wikiLink"></label>
                <input className="form-control" type="text" id="wikiLink" name="wikiLink" value={this.state.wikiLink}
                onChange={this.handleChange} />
                </div>
                <input className="btn btn-primary" type="submit" value="Add Bird"/>
            </form>
        )
    }
}
