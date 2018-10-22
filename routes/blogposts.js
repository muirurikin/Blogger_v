const express = require('express');
const router = express.Router();

const Post = require('../models/blogpost');

router.get('/', (req, res) => {
    // Post.getPosts(function(err, posts){
    //     if (err) {
	// 		console.log(err);
    //     } else {
	// 		res.render('blogs/posts', {posts: posts});
	// 	}
    // });
});

router.get('/new', (req, res) => {
    res.render('blogs/new');
});

router.post('/', (req, res) => {
	let post = {
		title: req.body.title,
		author: req.body.author,
		body: req.body.pbody
	}
	Post.addPost(post, function(err, post) {
		if (err) {
			console.log(err);
		} else {
			res.send(`You reached the Post Route ${post}`);
		}
	});
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