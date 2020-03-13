const birds = require('express').Router()
const Birds = require('../models/birds.js')




/*************************************
Routs
*************************************/
// Index
birds.get('/', (req, res) => {
  Birds.find({}, (err, foundBirds) => {
    if(err) {
      res.status(400).json({
        error: err.message
      })
    }
    res.status(200).json(foundBirds)
  })
})

// Create
birds.post('/', (req, res) => {
  Birds.create(req.body, (err, createdBird) => {
    if(err) {
      res.status(400).json({
        error: err.message
      })
    }
    res.status(200).send(createdBird)
  })
})

birds.delete('/:id', (req, res) => {
  Birds.findByIdAndRemove(req.params.id, (err, deletedBird) => {
    if(err) {
      res.status(400).json({
        error: err.message
      })
    }
    res.status(200).json(deletedBird)
  })
})

birds.put('/:id', (req, res) => {
  Birds.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBird) => {
    if(err) {
      res.status(400).json({
        error: err.message
      })
    }
    res.status(200).json(updatedBird)
  })
})



module.exports = birds
