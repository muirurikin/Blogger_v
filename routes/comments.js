const express = require('express');
// const mongoose = require('mongoose');

const router = express.Router();

const Post = require('../models/blogpost');
const Comment = require('../models/comment');

router.post('/', (req, res) => {
  const { text, author } = req.body;
  const comment = {
    text,
    author,
  };
  Comment.addComment(comment, (err, newComment) => {
    if (err) {
      throw err;
    } else {
      Post.comments.push(newComment);
      Post.save();
      res.redirect(`/posts/${Post._id}`);
    }
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const comment = req.body;
  Post.updateComment(id, comment, {}, (err, updatedComment) => {
    if (err) {
      throw err;
    } else {
      res.json(updatedComment);
    }
  });
});


module.exports = router;
