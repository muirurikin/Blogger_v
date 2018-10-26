const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

const config = require('./config/config');

mongoose.set('useCreateIndex', true);
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true });

const User = require('./models/user');
const Post = require('./models/blogpost');
const routes = require('./routes/index');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/blogposts');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({
  secret: config.secret,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.loggedUser = req.user;
  next();
});

app.use('/', routes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);

const port = config.PORT || 3000;

app.listen(port, () => {
  console.log(`Express app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.