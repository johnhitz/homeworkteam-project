const mongoose = require('mongoose')

const birdsSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  wikiUrl: String
})


module.exports = mongoose.model("Birds", birdsSchema)
