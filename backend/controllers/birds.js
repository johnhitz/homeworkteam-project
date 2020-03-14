const birds = require('express').Router()
const Birds = require('../models/birds.js')
const birdSeed = [
    {
        name: 'European Goldfinch',
        image: 'https://en.wikipedia.org/wiki/European_goldfinch#/media/File:Carduelis_carduelis_close_up.jpg',
        wikiURL: 'https://en.wikipedia.org/wiki/European_goldfinch'
    },
    {
        name: 'Mourning Dove',
        image: 'https://en.wikipedia.org/wiki/Mourning_dove#/media/File:Mourning_Dove_2006.jpg',
        wikiURL: 'https://en.wikipedia.org/wiki/Mourning_dove'
    },
    {
        name: 'Epine Grosbeak',
        image: 'https://en.wikipedia.org/wiki/Pine_grosbeak#/media/File:Pine_Grosbeak_(Pinicola_enucleator)_(13667564073).jpg',
        wikiURL: 'https://en.wikipedia.org/wiki/Pine_grosbeak'
    },
    {
        name: 'Hawaiian Honeycreeper',
        image: 'https://en.wikipedia.org/wiki/Hawaiian_honeycreeper#/media/File:Iiwi.jpg',
        wikiURL: 'https://en.wikipedia.org/wiki/Hawaiian_honeycreeper'
    }
]




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

// Seed
birds.get('/seed', (req, res) => {
    console.log('birdseed contains', birdSeed);
    Birds.create(birdSeed, (error, data) => {
        if (error) {
            console.log(`Error seeding the database: ${error}`);
        } else {
            console.log(`Database successfully seeded.`);
        }
    })
})

// Reset database
birds.get('/reset', (req, res) => {
    Birds.deleteMany({}, error => {
        console.log(`Birds data removed`);
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
