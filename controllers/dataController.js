const Outfit = require('../models/outfit')
const Shoe = require('../models/shoe')

const dataController = {
    // Index,
    index(req, res, next) {
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
    indexShoe(req, res, next) {
        Shoe.find({ username: req.session.username }, (err, found) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                res.locals.data.shoes = found
                next()
            }
        })
    },
    // Destroy
    destroy(req, res, next) {
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
    update(req, res, next) {
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
    create(req, res, next) {
        req.body.readyToWear = req.body.readyToWear === 'on'
        req.body.username = req.session.username


        Outfit.create(req.body, (err, createdOutfit) => {
            if (err) {
                res.status(400).send({
                    msg: err.message
                })
            } else {
                Shoe.count({ username: req.session.username }).exec(function (err, count) {
                    // Get a random entry
                    var random = Math.floor(Math.random() * count)
                    Shoe.findOne({ username: req.session.username }).skip(random).exec(
                        function (err, result) {
                            if (result == null) {
                                res.locals.data.outfit = createdOutfit

                                next()
                            } else {
                                // liekly source of futer errors once you have shoes int he DB
                                req.body.shoeID = result._id // might be .id
                                Outfit.findByIdAndUpdate(createdOutfit._id, req.body, { new: true }, (err, updatedOutfit) => {
                                    if (err) {
                                        res.status(400).send({
                                            msg: err.message
                                        })
                                    } else {
                                        res.locals.data.outfit = updatedOutfit
                                        next()
                                    }
                                })
                            }
                        })
                })
            }
        })
    },
    // Edit
    // Show
    show(req, res, next) {
        Outfit.findById(req.params.id, (err, foundOutfit) => {
            if (err) {
                res.status(404).send({
                    msg: err.message,
                    output: 'Could not find a outfit with that ID'
                })
            } else {
                Shoe.findById(foundOutfit.shoeID, (err, foundShoe) => {
                    if (!err) {
                        res.locals.data.shoe = foundShoe
                    }
                    res.locals.data.outfit = foundOutfit
                    next()
                })
            }
        })
    }
}

module.exports = dataController
