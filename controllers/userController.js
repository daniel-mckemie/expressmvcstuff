// TODO: [1] import the your model
const { User } = require('../models');


module.exports = {
  async index(req, res, next) {
    try {
      res.locals.users = await User.findAll({
        attributes:    { exclude: ['created_at', 'updated_at'] },
        include:       ['favoriteColors'],
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },

  /**
   * @async
   * @method getOne
   * @desc search for and set one User in res.locals
   * @return undefined
   */
  async findOne(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.user = await User.findOne({
        where:         { id },
        includes:      ['favoriteColors'],
        limit:         1,
        rejectOnEmpty: true,
      });
      next();
    } catch (e) {
      next(e);
    }
  },
};
