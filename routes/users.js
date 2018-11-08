const express = require('express');
const passport = require('passport');
const { celebrate, Joi, errors } = require('celebrate');

const router = express.Router();

const User = require('../models/user');


router.get('/register', (req, res) => {
  res.render('users/register');
});

router.post('/register', (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
  });

  User.register(user, req.body.password, (err) => {
    if (err) {
      res.render('users/register');
      throw err;
    } else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/users/profile');
      });
    }
  });
});

router.get('/profile', (req, res) => {
  res.render('users/profile');
});

router.get('/login', (req, res) => {
  res.render('users/login');
});

router.post('/login', passport.authenticate('local', { successRedirect: '/posts', failureRedirect: '/users/login' }), () => {

});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.getUser(id, (err, user) => {
    if (err) {
      throw err;
    } else {
      res.render('users/profile', { user });
    }
  });
});
router.get('/:id/edit', (req, res) => {
  res.send('User Edit Page');
});
router.put('/:_id', (req, res) => {
  const id = req.params._id;
  const user = req.body;
  User.updateUser(id, user, {}, (err, updatedUser) => {
    if (err) {
      throw err;
    } else {
      res.json(updatedUser);
    }
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  User.removeUser(id, (err) => {
    if (err) {
      throw err;
    } else {
      res.send('User Deleted');
    }
  });
});

module.exports = router;
