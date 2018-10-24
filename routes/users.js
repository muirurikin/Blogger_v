const express = require('express');
const router = express.Router();

const User = require('../models/user');
router.get('/', (req, res) => {
    res.send('Hello Users');
});
router.get('/new', (req, res) => {
    res.send('Add New User');
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
    res.send('User Profile Page');
});
router.get('/:id/edit', (req, res) => {
    res.send('User Edit Page');
});
router.put('/:id', (req, res) => {
    res.send('User Updated');
});
router.delete('/:id', (req, res) => {
    res.send('User Deleted');
});

module.exports = router;