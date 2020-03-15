const mongoose = require('mongoose')

const birdsSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  description: String,
  order: String,
  family: String,
  genus: String,
  wikiURL: String,
  likes: Number
})


module.exports = mongoose.model("Birds", birdsSchema)
