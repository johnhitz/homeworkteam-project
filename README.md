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

#### Birds.js

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
