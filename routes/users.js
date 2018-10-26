const express = require('express');
const passport = require('passport');
const router = express.Router();

const User = require('../models/user');

router.get('/login', (req, res) => {
    res.render('users/login');
});
router.get('/register', (req, res) => {
    res.render('users/register');
});
router.post('/register', (req, res) => {
    let user = new User({
        username: req.body.username,
        email: req.body.email
    });
    User.register(user, req.body.password, function(err, user) {
        if (err) {
            console.log(err);
            res.render('users/register');
        } else {
            passport.authenticate('local')(req, res, function() {
                res.redirect('/profile');
            });
        }
    });
});
router.get('/:id', (req, res) => {
    let id = req.params.id;
    User.getUser(id, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    })
});
router.get('/:id/edit', (req, res) => {
    res.send('User Edit Page');
});
router.put('/:_id', (req, res) => {
    let id = req.params._id;
    let user = req.body;
    User.updateUser(id, user, {}, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
        }
    })
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    User.removeUser(id, function(err) {
        if (err) {
            console.log(err);
        } else {
            res.send('User Deleted');
        }
    });
});

module.exports = router;