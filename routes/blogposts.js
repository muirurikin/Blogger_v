const express = require('express');
const router = express.Router();

const Post = require('../models/blogpost');
const middleware = require('../middleware');

router.get('/',middleware.isLoggedIn, (req, res) => {
    Post.getPosts(function(err, posts){
        if (err) {
			console.log(err);
        } else {
			res.render('blogs/posts', {posts: posts});
		}
    });
});

router.get('/new', middleware.isLoggedIn, (req, res) => {
    res.render('blogs/new');
});

router.post('/', (req, res) => {
	let post = {
		title: req.body.title,
		author: req.body.author,
		body: req.body.body
	};
	Post.addPost(post, function(err, post) {
		if (err) {
			console.log(err);
		} else {
			res.redirect('/posts');
		}
	});
});

router.get('/:id', (req, res) => {
	Post.getPost(req.params.id, function(err, post) {
		if (err) {
			console.log(err);
		} else {
			res.render('blogs/post', {post: post});
		}
	});
});

router.get('/:id/edit', (req, res) => {
    res.render('blogs/edit');
});

router.put('/:id', (req, res) => {
	let id = req.params.id;
	let post = req.body;
	Post.updatePost(id, post, {}, function(err, post) {
		if (err) {
			console.log(err);
		} else {
			res.json(post);
		}
	});
});

router.delete('/:id', (req, res) => {
	let id = req.params.id;
	Post.removePost(id, function(err) {
		if (err) {
			console.log(err);
		} else {
			res.send('Your Post Has Been Deleted');
		}
	});
});


module.exports = router;