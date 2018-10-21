const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const localStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose');

const User = require('./models/user');
const Post = require('./models/blogpost');
const routes = require('./routes/index');
const postRoutes = require('./routes/blogposts');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/posts', postRoutes);

const port = 3000;

app.listen(port, () => {
  console.log(`Express app listening on port ${port}!`);
});

//Run app, then load http://localhost:port in a browser to see the output.