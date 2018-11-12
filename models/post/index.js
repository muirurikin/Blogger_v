const postSchema = require('./schema');
const { getPosts, getPost, addPost, updatePost, removePost } = require('./methods');
module.exports = {
  postSchema,
  getPosts,
  getPost,
  addPost,
  updatePost,
  removePost
};
