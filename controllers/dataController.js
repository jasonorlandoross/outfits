const Outfit = require('../models/outfit')

const dataController = {
  // Index,
  index (req, res, next) {
    Outfit.find({ username: req.session.username }, (err, foundOutfits) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.outfits = foundOutfits
        next()
      }
    })
  },
  // Destroy
  destroy (req, res, next) {
    Outfit.findByIdAndDelete(req.params.id, (err, deletedOutfit) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.outfit = deletedOutfit
        next()
      }
    })
  },
  // Update
  update (req, res, next) {
    req.body.readyToWear = req.body.readyToWear === 'on'
    Outfit.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedOutfit) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.outfit = updatedOutfit
        next()
      }
    })
  },
  // Create
  create (req, res, next) {
    req.body.readyToWear = req.body.readyToWear === 'on'
    req.body.username = req.session.username
    Outfit.create(req.body, (err, createdOutfit) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.outfit = createdOutfit
        next()
      }
    })
  },
  // Edit
  // Show
  show (req, res, next) {
    Outfit.findById(req.params.id, (err, foundOutfit) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a outfit with that ID'
        })
      } else {
        res.locals.data.outfit = foundOutfit
        next()
      }
    })
  }
}

module.exports = dataController
