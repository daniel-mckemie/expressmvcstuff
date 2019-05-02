// TODO: [1] import the your model
const { User } = require('../models');

module.exports = {
  /**
   * @method userParser
   * @desc middleware that checks the session and generates a user in req
   */
  async userParser(req, res, next) {
    // we don't have a session, dont do anything
    if (!('user' in req.session)) {
      console.log('--> no session, moving on')
      return next();
    }

    // if we have a session, get the user and save it in the request
    const { id } = req.session.user;
    req.user = await User.findOne({
      where:         { id },
      include:       ['favoriteColors'],
      limit:         1,
      rejectOnEmpty: true,
    });
    res.locals.user = req.user;
    console.log('--> set user in req');
    return next();
  },

  loginRequired(req, res, next) {
    if ('user' in req.session) {
      return next();
    }
    return res.redirect('/auth/login');
  },

  logout(req, res) {
    if ('session' in req) {
      req.session.destroy(() => res.redirect('/auth/login'));
    }
  },

  showLoginForm(req, res) {
    res.render('LoginForm');
  },

  showProfile(req, res) {
    res.redirect('/profile');
  },


  async tryLogin(req, res, next) {
    try {
      // get the credentials from the incoming post
      const { email } = req.body;
      const user = await User.findOne({
        where:         { email },
        limit:         1,
        rejectOnEmpty: true,
      });
      req.session.user = user;
      req.session.times = 0;
      // we have the user, let's validate the password
      next();
    } catch (e) {
      next(e);
    }
  },
};
