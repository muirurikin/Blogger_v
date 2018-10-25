const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/login', (req, res) => {
    res.render('users/login');
});
router.get('/new', (req, res) => {
    res.render('users/register');
});
router.post('/', (req, res) => {
    let user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }
    User.addUser(user, function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.json(user);
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