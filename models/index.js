const Sequelize = require('sequelize');

// connect to the database, and set up some behaviour
const db = new Sequelize({
  database: 'myfavoritethings_dev',
  dialect:  'postgres',
  define:   {
    underscored: true,
    returning:   true,
  },
});


// Users have many colors
const Color = db.define('color', {
  name: Sequelize.STRING(64),
  h:    Sequelize.INTEGER,
  s:    Sequelize.INTEGER,
  v:    Sequelize.INTEGER,
  hex:  Sequelize.CHAR(6),
});

const User = db.define('user', {
  fname: Sequelize.STRING(64),
  lname: Sequelize.STRING(64),
  email: {
    type:     Sequelize.STRING(255),
    validate: {
      isEmail: true,
    },
  },
  image: Sequelize.STRING(255),
});


// ASSOCIATIONS
User.belongsToMany(Color, { as: 'favoriteColors', through: 'favorite_colors' });
Color.belongsToMany(User, { through: 'favorite_colors' });


module.exports = {
  User,
  Color,
  db,
};


