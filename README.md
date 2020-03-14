# Homework Birds Sightings Application

## Team Members:
* John Hitz

* Ric Mershon


## Approach:
* Three Components
  * frontend
    * src
      * App.js
      * /public
        * index
    * React components
    * CSS (colaberatively)
  * backend
    * server.js
    * /controllers
    * /model
    * /public (?)


### Database Schemad

```
const birdsSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  Class: String,
  Order: String,
  Family: String,
  wikiURL: String
})
```
### React components

#### App.js

```
default export class App extends React.Component {
}
```

* Bird.js

* Birds.js

* NewBird.js


#### Bird.js
* Shows details for a single bird.

#### Birds.js
* Shows all birds.

```
class Birds extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            birds:[]
        }        
    }
}
```
#### NewBird.js
* Holds form and form functionality to add a new bird

```
class NewBird extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            name: '',
            wikiURL: '',
            image: ''
        }        
    }
}

```
