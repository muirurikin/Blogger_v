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

module.exports = router;
