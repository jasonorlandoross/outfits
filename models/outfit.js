const mongoose = require('mongoose')

// Make A Schema
const outfitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String },
  readyToWear: Boolean,
  shoeID: String,
  username: String
})

// Make A Model From The Schema

const Outfit = mongoose.model('Outfit', outfitSchema)

// Export The Model For Use  In The App

module.exports = Outfit
