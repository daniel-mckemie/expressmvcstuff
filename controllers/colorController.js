// TODO: [1] import the your model
const { Color, db } = require('../models');


module.exports = {

  /**
   * @async
   * @method index
   * @desc set all the Colors in res.locals
   * @return undefined
   */
  async index(req, res, next) {
    try {
      res.locals.colors = await Color.findAll({
        rejectOnEmpty: true,
        order:         [
          [db.literal('h,hex'), 'ASC'],
        ],
        limit:50,
      });
      next();
    } catch (e) {
      next(e);
    }
  },

  /**
   * @async
   * @method findOne
   * @desc search for and set one Color in res.locals
   * @return undefined
   */
  async findOne(req, res, next) {
    try {
      const id = Number.parseInt(req.params.id, 10);
      res.locals.color = await Color.findOne({
        where:         { id },
        rejectOnEmpty: true,
        limit:         1,
      });
      next();
    } catch (e) {
      next(e);
    }
  },

  async saveFavorites(req, res, next) {
    try {
      // this is not documented.
      // @see https://github.com/sequelize/sequelize/issues/864#issuecomment-96241924
      await req.user.setFavoriteColors(req.body.color_id, { save: false });
      await req.user.save();
      next();
    } catch (e) {
      console.error(e)
      next(e);
    }
  },
};
