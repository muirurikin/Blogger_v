const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local');
// const passportLocalMongoose = require('passport-local-mongoose');

const { PORT, MONGODB_URI, secret } = require('./config/config');

mongoose.set('useCreateIndex', true);
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const User = require('./models/user');
// const Post = require('./models/blogpost');
// const Comment = require('./models/comment');
const routes = require('./routes/index');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/blogposts');
// const commentRoutes = require('./routes/comments');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({
  secret,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.loggedUser = req.user;
  next();
});

app.use('/', routes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/posts/:id/comments', postRoutes);


const port = PORT;

app.listen(port, () => {
  console.log(`Express app listening on port ${port}!`);
});

// Run app, then load http://localhost:port in a browser to see the output.
