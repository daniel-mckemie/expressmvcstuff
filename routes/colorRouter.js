const express  = require('express');
const colors = require('../controllers/colorController');
const auth = require('../controllers/authController');
const views    = require('../controllers/viewController');

const colorRouter = express.Router({ mergeParams: true });




colorRouter.route('/faves')
  .all(auth.loginRequired)
  .get(colors.index, views.showChooseColors)
  .post(colors.saveFavorites, (req, res) => res.redirect('/colors/faves'))


colorRouter.route('/:id')
  .get(colors.findOne);
/*  .put(colors.update)
  .delete(colors.destroy); */

// everything in this file will be mounted at /colors
colorRouter.route('/')
  .get(colors.index);
/* .post(colors.create); */

colorRouter.use(views.showJSON, views.notFound);

module.exports = colorRouter;
