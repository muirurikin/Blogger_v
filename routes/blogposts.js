const express = require('express');

const router = express.Router();

const Post = require('../models/blogpost');
const middleware = require('../middleware');

router.get('/', middleware.isLoggedIn, (req, res) => {
  Post.getPosts((err, posts) => {
    if (err) {
      throw err;
    } else {
      res.render('blogs/posts', { posts });
    }
  });
});

router.get('/new', middleware.isLoggedIn, (req, res) => {
  res.render('blogs/new');
});

router.post('/', (req, res) => {
  const { title, author, body } = req.body;
  const post = {
    title,
    author,
    body,
  };
  Post.addPost(post, (err) => {
    if (err) {
      throw err;
    } else {
      res.redirect('/posts');
    }
  });
});

router.get('/:id', (req, res) => {
  Post.getPost(req.params.id, (err, post) => {
    if (err) {
      throw err;
    } else {
      res.render('blogs/post', { post });
    }
  });
});

router.get('/:id/edit', (req, res) => {
  res.render('blogs/edit');
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const post = req.body;
  Post.updatePost(id, post, {}, (err, updatedPost) => {
    if (err) {
      throw err;
    } else {
      res.json(updatedPost);
    }
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params.id;
  Post.removePost(id, (err) => {
    if (err) {
      throw err;
    } else {
      res.send('Your Post Has Been Deleted');
    }
  });
});


module.exports = router;
