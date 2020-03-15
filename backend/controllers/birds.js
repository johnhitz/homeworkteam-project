const birds = require('express').Router()
const Birds = require('../models/birds.js')
const birdSeed = [
    {
        name: 'American Goldfinch',
        image: 'https://www.allaboutbirds.org/guide/assets/photo/124706471-1280px.jpg',
        description: 'The American goldfinch (Spinus tristis) is a small North American bird in the finch family. It is migratory, ranging from mid-Alberta to North Carolina during the breeding season, and from just south of the Canada–United States border to Mexico during the winter.',
        order: 'Passeriformes',
        family: 'Fringillidae',
        genus: 'Carduelis',
        wikiURL: 'https://en.wikipedia.org/wiki/American_goldfinch',
        likes: 0
    },
    {
        name: 'Mourning Dove',
        image: 'https://www.allaboutbirds.org/guide/assets/photo/60386921-1280px.jpg',
        description: 'The mourning dove (Zenaida macroura) is a member of the dove family, Columbidae. The bird is also known as the American mourning dove or the rain dove, and erroneously as the turtle dove, and was once known as the Carolina pigeon or Carolina turtledove.',
        order: 'Columbiformes',
        family: 'Columbidae',
        genus: 'Zenaida',
        wikiURL: 'https://en.wikipedia.org/wiki/Mourning_dove',
        likes: 0
    },
    {
        name: 'Pine Grosbeak',
        image: 'https://www.allaboutbirds.org/guide/assets/photo/67356151-1280px.jpg',
        description: 'The pine grosbeak (Pinicola enucleator) is a large member of the true finch family, Fringillidae. It is found in coniferous woods across Alaska, the western mountains of the United States, Canada, and in subarctic Fennoscandia and across the Palearctic to Siberia.',
        order: 'Passeriformes',
        family: 'Fringillidae',
        genus: 'Pinicola',
        wikiURL: 'https://en.wikipedia.org/wiki/Pine_grosbeak',
        likes: 0
    },
    {
        name: 'Ruby Throated Hummingbird',
        image: 'https://www.allaboutbirds.org/guide/assets/photo/60395561-1280px.jpg',
        description: 'The ruby-throated hummingbird (Archilochus colubris) is a species of hummingbird that generally spends the winter in Central America, Mexico, and Florida, and migrates to Eastern North America for the summer to breed. It is by far the most common hummingbird seen east of the Mississippi River in North America.',
        order: 'Apodiformes',
        family: 'Trochilidae',
        genus: 'Archilochus',
        wikiURL: 'https://en.wikipedia.org/wiki/Ruby-throated_hummingbird',
        likes: 0
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
  console.log(`Req.body: `,req.body);
  console.log("Hit it!");
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
