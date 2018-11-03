const express = require('express');
const passport = require('passport');
const expressJoi = require('express-joi');
const { check, validationResult } = require('express-validator/check');

const app = express();
const router = express.Router();

const User = require('../models/user');

app.use(express.json());
router.get('/register', (req, res) => {
  res.render('users/register');
});

const getUsersSchema = {
  username: expressJoi.Joi.types.String().alphanum().min(2).max(20),
  email: expressJoi.Joi.types.String().email({ minDomainAtoms: 2 }),
  password: expressJoi.Joi.types.String().regex(/^[a-zA-Z0-9]{3,30}$/),
};

router.post('/register', expressJoi.joiValidate(getUsersSchema), [
  check('username').isString(),
  check('email').isEmail(),
  check('password').isLength({ min: 4 }),
], (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
  });
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  User.register(user, req.body.password, (err) => {
    if (err) {
      res.render('users/register');
      throw err;
    } else {
      passport.authenticate('local')(req, res, () => {
        res.redirect('/profile');
      });
    }
  });
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
