const RESOURCE_PATH = '/outfits'

const viewController = {
  index (req, res, next) {
    res.render('outfits/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('outfits/New')
  },
  edit (req, res, next) {
    res.render('outfits/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('outfits/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const outfitId = req.params.id || res.locals.data.outfit._id
    res.redirect(`${RESOURCE_PATH}/${outfitId}`)
  }

}

module.exports = viewController
