const express  = require('express');
const auth = require('../controllers/authController');

const authRouter = express.Router({ mergeParams: true });

// everything in this file will be mounted at /colors
authRouter.route('/login')
  .get(auth.showLoginForm)
  .post(auth.tryLogin, auth.showProfile)
  .delete(auth.logout);

authRouter.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(401);
});

module.exports = authRouter;
