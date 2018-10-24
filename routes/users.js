const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Users');
});
router.get('/new', (req, res) => {
    res.send('Add New User');
});
router.post('/', (req, res) => {
    res.send('User Added');
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