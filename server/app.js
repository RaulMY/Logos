var express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require("express-session");
const passport = require("passport");


const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport');
passportSetup(passport);

const index = require('./routes/index');
const users = require('./routes/users');
const arcky = require('./routes/arcky');
const ideas = require('./routes/ideas');

const app = express();

const  corsOptions ={
  origin:true,
  credentials:true
}
app.use(require("cors")(corsOptions));

require("mongoose").connect(process.env.SERVER);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//passport 
app.use(session({
  secret: 'bliss',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/auth', authRoutes);
app.use('/users', users);
app.use('/arcky', arcky);
app.use('/ideas', ideas);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

module.exports = app;
