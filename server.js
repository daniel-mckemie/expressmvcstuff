const express        = require('express');
const logger         = require('morgan');
const bodyParser     = require('body-parser');
const session        = require('express-session');
const reactViews     = require('express-react-views');
const methodOverride = require('method-override');
const path           = require('path');

const colorRouter    = require('./routes/colorRouter');
const authRouter     = require('./routes/authRouter');
const userRouter     = require('./routes/userRouter');
const authController = require('./controllers/authController');


// init a port
const PORT = process.env.PORT || 3000;

// set up express
const app = express();
app.set('view engine', 'jsx');
app.engine('jsx', reactViews.createEngine());

// logger
app.use(logger('dev'));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join('public')));

app.use(session({
  secret:            'mysuperlongsecret that nobody knows',
  cookie:            { maxAge: 60000 },
  resave:            false,
  saveUninitialized: false,
}));


// jason's user parser
app.use(authController.userParser);


app.use('/auth', authRouter);
app.use('/colors', colorRouter);
app.use('/users', userRouter);

app.get('/profile', authController.loginRequired, (req, res) => {

  res.locals.user = req.user;
  res.locals.times = req.session.times += 1;
  res.render('Profile');
});


app.get('/', (req, res) => {
  res.locals.name = 'World';
  res.render('Index');
});

app.listen(PORT, () => console.log(`Server up and listening on port ${PORT} in ${app.get('env')} mode`));


// to do
// colors/
// colors/:color_id
// colors/:color_id/users
// users
// users/:id
