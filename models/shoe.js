const mongoose = require('mongoose')

// Make A Schema
const shoeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToWear: Boolean,
  username: String
})

// Make A Model From The Schema

const Shoe = mongoose.model('Shoe', shoeSchema)

// Export The Model For Use  In The App

module.exports = Shoe
