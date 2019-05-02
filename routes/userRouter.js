const express  = require('express');
const users = require('../controllers/userController');
const views    = require('../controllers/viewController');

const userRouter = express.Router({ mergeParams: true });

// everything in this file will be mounted at /users
userRouter.route('/')
  .get(users.index);
/* .post(users.create); */


userRouter.route('/:id')
  .get(users.findOne);
/*  .put(users.update)
  .delete(users.destroy); */

userRouter.use(views.showJSON, views.notFound);

module.exports = userRouter;
