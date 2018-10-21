const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('blogs/posts');
});

router.get('/new', (req, res) => {
    res.render('blogs/new');
});

router.post('/', (req, res) => {
    res.send('You reached the post route');
});

router.get('/:id', (req, res) => {
    res.render('blogs/post');
});

router.get('/:id/edit', (req, res) => {
    res.render('blogs/edit');
});

router.put('/:id', (req, res) => {
    res.send('You reached the update route');
});

router.delete('/:id', (req, res) => {
    res.send('You reached the Delete route');
});


module.exports = router;