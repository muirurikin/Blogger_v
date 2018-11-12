module.exports = (postSchema) => {
  postSchema.methods.getPosts = async function getPosts(callback, limit) {
    await this.find(callback).limit(limit);
  };
};

module.exports = (postSchema) => {
  postSchema.methods.addPost = async function addPost(post) {
    await this.create(post);
  };
};

module.exports = (postSchema) => {
  postSchema.methods.getPost = async function getPost(id) {
  await this.findById(id);
};
};

module.exports = (postSchema) => {
  postSchema.methods.updatePost = async function updatePost(id, post, options) {
  const query = { _id: id };
  const update = {
    title: post.title,
    author: post.author,
    body: post.body,
  };
  await this.findOneAndUpdate(query, update, options);
};
};

module.exports = (postSchema) => {
  postSchema.methods.removePost = async function removePost(id) {
  const query = { _id: id };
  await this.findOneAndDelete(query);
};
};
